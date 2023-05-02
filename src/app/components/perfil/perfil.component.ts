import { Component } from '@angular/core';
import { Coche } from 'src/app/models/coche/coche.module';
import { SQLserviceService } from 'src/app/services/sqlservice.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {

  dni: string;
  usuario = "";
  apellidos = "";
  edad = "";
  email = "";
  telefono = "";
  cochesUser: Coche[];

  constructor(private sqlService: SQLserviceService) { }

  ngOnInit() {
    this.sqlService.getUserLogged().subscribe(data => {
      //console.log(data.dni);
      this.dni = data.dni;
      this.usuario = data.nombre;
      this.apellidos = data.apellidos;
      this.edad = data.edad;
      this.email = data.email;
      this.telefono = data.telefono;
      this.sqlService.getCoches(data.dni).subscribe((data: any) => {
        //console.log("mensaje1", data);
        this.cochesUser = data;
      });
    });

  }
}
