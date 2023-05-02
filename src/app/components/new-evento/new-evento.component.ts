import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from 'src/app/models/evento/evento.module';
import { SQLserviceService } from 'src/app/services/sqlservice.service';

@Component({
  selector: 'app-new-evento',
  templateUrl: './new-evento.component.html',
  styleUrls: ['./new-evento.component.scss']
})
export class NewEventoComponent implements OnInit {

  Dni_Usuario_Creacion: string;
  Ubicacion: string;
  Fecha: Date;
  Hora: string;
  Descripcion: string;
  Permite_Modificados: boolean;
  Permite_Sin_Homologar: boolean;
  Num_Plazas: number;
  Img_Evento: File;
  Img_Name: string;
  Evento: Evento;
  imageData: any;

  constructor(private sqlService: SQLserviceService, private router: Router) { }

  ngOnInit(): void {
    this.sqlService.getUserLogged().subscribe(data => {
      this.Dni_Usuario_Creacion = data.dni;
    });
    this.Ubicacion = "";
    this.Fecha = new Date;
    this.Hora = "00:00";
    this.Descripcion = "";
    this.Permite_Modificados = false;
    this.Permite_Sin_Homologar = false;
    this.Num_Plazas = 0;
  }

  crearEvento() {
    console.log(this.Permite_Modificados);
    console.log(this.Permite_Sin_Homologar);
    let auxPermite_Modificado;
    let auxPermite_Sin_Homologado;
    if (this.Permite_Modificados == true) {
      auxPermite_Modificado = "1";
    } else {
      auxPermite_Modificado = "0";
    }
    if (this.Permite_Sin_Homologar == true) {
      auxPermite_Sin_Homologado = "1";
    } else {
      auxPermite_Sin_Homologado = "0";
    }
    this.Evento = new Evento(this.Dni_Usuario_Creacion, this.Ubicacion, this.Fecha, this.Hora, this.Descripcion,
      auxPermite_Modificado, auxPermite_Sin_Homologado, this.Num_Plazas, this.Img_Name);

    console.log(this.Evento);
    //console.log(this.imageData);

    this.sqlService.guardarImagen(this.imageData).subscribe(datos => {

      console.log(datos);
      this.sqlService.newEvento(this.Evento).subscribe(datos => {
        console.log(datos);
        this.router.navigate(["/home"]);
      })

    });

  }

  /*onFileSelected(event: any) {
    const file: File = event.target.files[0];
    // Aquí puedes hacer algo con el archivo seleccionado
    console.log(file.name);
    this.Img_Name = file.name;
  }*/
  // Seleccionar la imagen y convertirla a base64
  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        // Enviar la imagen a PHP en formato JSON
        this.Img_Name = event.target.files[0].name;
        this.imageData = {
          nombreArchivo: event.target.files[0].name,
          base64: reader.result ? reader.result.toString().split(',')[1] : null
        };
        console.log(this.imageData);
      };
    }
  }


}