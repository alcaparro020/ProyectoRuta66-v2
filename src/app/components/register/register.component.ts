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
  contraseniaValid: boolean = true;

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
    const contraseniaPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)\w+$/;
    const telefonoPattern = /^\d{9}$/;

    let correcto = true;

    if (!this.Dni || !dniPattern.test(this.Dni)) {
      this.dniValid = false;
      correcto = false; // DNI inválido o vacío
    } else {
      this.dniValid = true;
    }

    if (!this.Nombre || this.Nombre.trim().length === 0) {
      this.nombreValid = false;
      correcto = false; // Nombre vacío o solo espacios en blanco
    } else {
      this.nombreValid = true;
    }

    if (!this.Apellidos || this.Apellidos.trim().length === 0) {
      this.apellidosValid = false;
      correcto = false; // Apellidos vacíos o solo espacios en blanco
    } else {
      this.apellidosValid = true;
    }

    if (!this.Edad || this.Edad < 18) {
      this.edadValid = false;
      correcto = false; // Edad no especificada o menor de 18 años
    } else {
      this.edadValid = true;
    }

    if (!this.Telefono || !telefonoPattern.test(this.Telefono.toString())) {
      this.telefonoValid = false;
      correcto = false; // Email inválido o vacío
    } else {
      this.telefonoValid = true;
    }

    if (!this.Email || !emailPattern.test(this.Email)) {
      this.emailValid = false;
      correcto = false; // Email inválido o vacío
    } else {
      this.emailValid = true;
    }

    if (!this.Contrasenia || !contraseniaPattern.test(this.Contrasenia)) {
      this.contraseniaValid = false;
      correcto = false; // Email inválido o vacío
    } else {
      this.contraseniaValid = true;
    }

    return correcto; // Todos los campos han pasado las validaciones
  }

}
