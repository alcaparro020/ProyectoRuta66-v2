import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Eventomodificado } from 'src/app/interfaces/eventomodificado';
import { Evento } from 'src/app/models/evento/evento.module';
import { SQLserviceService } from 'src/app/services/sqlservice.service';

@Component({
  selector: 'app-modificar-evento',
  templateUrl: './modificar-evento.component.html',
  styleUrls: ['./modificar-evento.component.scss']
})
export class ModificarEventoComponent implements OnInit {

  Id_Evento: string | null;
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
  Evento: Eventomodificado;
  imageData: any;

  ubicacionValid: boolean = true;
  fechaValid: boolean = true;
  horaValid: boolean = true;
  descripcionValid: boolean = true;
  numPlazasValid: boolean = true;
  imgEventoValid: boolean = true;

  constructor(private sqlService: SQLserviceService, private rutaActiva: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.Id_Evento = this.rutaActiva.snapshot.paramMap.get("Id");
    console.log(this.Id_Evento);
    this.sqlService.getEvento(this.Id_Evento!).subscribe((data: any) => {
      console.log(data);
      this.Ubicacion = data.Ubicacion;
      this.Fecha = data.Fecha;
      this.Hora = data.Hora;
      this.Descripcion = data.Descripcion;
      if (data.Permite_Modificados == "1") {
        this.Permite_Modificados = true;
      } else {
        this.Permite_Modificados = false;
      }
      if (data.Permite_Sin_Homologar == "1") {
        this.Permite_Sin_Homologar = true;
      } else {
        this.Permite_Sin_Homologar = false;
      }
      this.Num_Plazas = data.Numero_Plazas;
    });
  }

  modificarEvento() {
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
    this.Evento = {
      "Descripcion": this.Descripcion,
      "Fecha": this.Fecha,
      "Hora": this.Hora,
      "IdEvento": this.Id_Evento!,
      "Imagenes": this.Img_Name,
      "Ubicacion": this.Ubicacion,
      "Permite_Modificados": auxPermite_Modificado,
      "Permite_Sin_Homologar": auxPermite_Sin_Homologado,
      "Numero_Plazas": this.Num_Plazas
    };
    console.log(this.Evento);
    if (this.validateForm()) {
      this.sqlService.guardarImagen(this.imageData).subscribe(datos => {

        //console.log(datos);
        this.sqlService.modificarEvento(this.Evento).subscribe(datos => {
          //console.log(datos);
          this.router.navigate(["/home"]);
        });
  
      });
    }

  }

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

  validateForm(): boolean {
    if (!this.Ubicacion || this.Ubicacion.trim().length === 0) {
      this.ubicacionValid = false;
      return false; // Ubicación vacía o solo espacios en blanco
    } else {
      this.ubicacionValid = true;
    }

    if (!this.Fecha) {
      this.fechaValid = false;
      return false; // Fecha no seleccionada
    } else {
      this.fechaValid = true;
    }

    if (!this.Hora) {
      this.horaValid = false;
      return false; // Hora vacía o solo espacios en blanco
    } else {
      this.horaValid = true;
    }

    if (!this.Descripcion || this.Descripcion.trim().length === 0) {
      this.descripcionValid = false;
      return false; // Descripción vacía o solo espacios en blanco
    } else {
      this.descripcionValid = true;
    }

    if (!this.Num_Plazas || this.Num_Plazas <= 0) {
      this.numPlazasValid = false;
      return false; // Número de plazas no válido
    } else {
      this.numPlazasValid = true;
    }

    if (!this.Img_Evento) {
      this.imgEventoValid = false;
      return false; // Archivo no seleccionado
    } else {
      this.imgEventoValid = true;
    }

    return true; // Todos los campos han pasado las validaciones
  }
}
