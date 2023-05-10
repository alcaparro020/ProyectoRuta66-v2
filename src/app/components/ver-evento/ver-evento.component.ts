import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRegistrado } from 'src/app/interfaces/user-registrado';
import { SQLserviceService } from 'src/app/services/sqlservice.service';

@Component({
  selector: 'app-ver-evento',
  templateUrl: './ver-evento.component.html',
  styleUrls: ['./ver-evento.component.scss']
})
export class VerEventoComponent implements OnInit {

  idEvento: any;
  dni_usuario_creacion: string;
  administrador: string;
  ubicacion: string;
  fecha: string;
  hora: string;
  descripcion: string;
  plazas: string;
  permite_Modificados: string;
  permite_Sin_Homologar: string;
  usuarios_Registrados: UserRegistrado[];

  constructor(private sqlService: SQLserviceService, private rutaActiva: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.idEvento = this.rutaActiva.snapshot.paramMap.get("Id");

    //console.log(this.idEvento);

    this.sqlService.getEvento(this.idEvento).subscribe((data: any) => {
      //console.log(data);
      this.ubicacion = data.Ubicacion;
      this.fecha = data.Fecha;
      this.hora = data.Hora;
      this.descripcion = data.Descripcion;
      this.plazas = data.Numero_Plazas;
      this.permite_Modificados = data.Permite_Modificados;
      this.permite_Sin_Homologar = data.Permite_Sin_Homologar;

      this.sqlService.getUserDni(data.Dni_Usuario_Creacion).subscribe((data: any) => {
        //console.log(data);
        this.administrador = data.nombre;
      });

      this.sqlService.getRegistros(this.idEvento).subscribe((data: any) => {
        //console.log("registrados", data);
        const arrayAux: any = [];
        for (let index = 0; index < data.length; index++) {
          this.sqlService.getUserDni(data[index].Dni_Usuario).subscribe((data: any) => {
            //console.log("añadir usuario array", data);
            const objetoAux = { "nombre": data.nombre, "edad": data.edad, "telefono": data.telefono, "email": data.email };
            //console.log(objetoAux);
            arrayAux.push(objetoAux);
          });
        };
        this.usuarios_Registrados = arrayAux;
      });

    });
  }
}
