import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario/usuario.module';
import { SQLserviceService } from 'src/app/services/sqlservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


  Dni: string;
  Nombre: string;
  Apellidos: string;
  Edad: number;
  Email: string;
  Telefono: number;
  Contrasenia: string;
  usuario: Usuario;

  constructor(private sqlService: SQLserviceService, private router: Router) { }

  agregarUsuario() {
    this.usuario = new Usuario(this.Dni, this.Nombre, this.Apellidos, this.Edad, this.Email, this.Telefono, this.Contrasenia);
    console.log(JSON.stringify(this.usuario));
    this.sqlService.addUser(this.usuario).subscribe(datos => {
      console.log(datos)
      /*if (datos['resultado'] === 'OK') {
         alert(datos['mensaje']);
       }*/
      this.router.navigate(["/login"]);
    });
  }

}
