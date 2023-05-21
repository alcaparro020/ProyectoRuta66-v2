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

  dniValid: boolean = true;
  nombreValid: boolean = true;
  apellidosValid: boolean = true;
  edadValid: boolean = true;
  telefonoValid: boolean = true;
  emailValid: boolean = true;

  constructor(private sqlService: SQLserviceService, private router: Router) { }

  agregarUsuario() {
    this.usuario = new Usuario(this.Dni, this.Nombre, this.Apellidos, this.Edad, this.Email, this.Telefono, this.Contrasenia);
    console.log(JSON.stringify(this.usuario));
    if (this.validateForm()) {
      this.sqlService.addUser(this.usuario).subscribe(datos => {
        console.log(datos)
        /*if (datos['resultado'] === 'OK') {
           alert(datos['mensaje']);
         }*/
        this.router.navigate(["/login"]);
      });
    }

  }

  validateForm(): boolean {
    const dniPattern = /^\d{8}[A-Za-z]$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!this.Dni || !dniPattern.test(this.Dni)) {
      this.dniValid = false;
      return false; // DNI inválido o vacío
    } else {
      this.dniValid = true;
    }

    if (!this.Nombre || this.Nombre.trim().length === 0) {
      this.nombreValid = false;
      return false; // Nombre vacío o solo espacios en blanco
    } else {
      this.nombreValid = true;
    }

    if (!this.Apellidos || this.Apellidos.trim().length === 0) {
      this.apellidosValid = false;
      return false; // Apellidos vacíos o solo espacios en blanco
    } else {
      this.apellidosValid = true;
    }

    if (!this.Edad || this.Edad < 18) {
      this.edadValid = false;
      return false; // Edad no especificada o menor de 18 años
    } else {
      this.edadValid = true;
    }

    // if (!this.telefono || this.telefono.trim().length === 0) {
    //   return false; // Teléfono vacío o solo espacios en blanco
    // }

    if (!this.Email || !emailPattern.test(this.Email)) {
      this.emailValid = false;
      return false; // Email inválido o vacío
    } else {
      this.emailValid = true;
    }

    return true; // Todos los campos han pasado las validaciones
  }

}
