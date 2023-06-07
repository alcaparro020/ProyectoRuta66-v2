import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario/usuario.module';
import { SQLserviceService } from 'src/app/services/sqlservice.service';

@Component({
  selector: 'app-modificar-perfil',
  templateUrl: './modificar-perfil.component.html',
  styleUrls: ['./modificar-perfil.component.scss']
})
export class ModificarPerfilComponent implements OnInit {

  dni: string | null;
  nombre: string;
  apellidos: string;
  edad: number;
  telefono: number;
  email: string;
  usuarioModificar: Usuario;

  nombreValid: boolean = true;
  apellidosValid: boolean = true;
  edadValid: boolean = true;
  telefonoValid: boolean = true;
  emailValid: boolean = true;

  constructor(private sqlService: SQLserviceService, private rutaActiva: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.dni = this.rutaActiva.snapshot.paramMap.get("dni");
    this.sqlService.getUserDni(this.dni!).subscribe((data: any) => {
      this.nombre = data.nombre;
      this.apellidos = data.apellidos;
      this.edad = data.edad;
      this.telefono = data.telefono;
      this.email = data.email;
    });
  }

  modificarPerfil() {
    if (this.validateForm()) {
      this.usuarioModificar = new Usuario(this.dni!, this.nombre, this.apellidos, this.edad, this.email, this.telefono, "");
      this.sqlService.modifyUserDni(this.usuarioModificar).subscribe(data => {
        this.router.navigate(["/perfil"]);
      });
    }
  }

  validateForm(): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let correcto = true;

    if (!this.nombre || this.nombre.trim().length === 0) {
      this.nombreValid = false;
      correcto = false; // Nombre vacío o solo espacios en blanco
    } else {
      this.nombreValid = true;
    }

    if (!this.apellidos || this.apellidos.trim().length === 0) {
      this.apellidosValid = false;
      correcto = false; // Apellidos vacíos o solo espacios en blanco
    } else {
      this.apellidosValid = true;
    }

    if (!this.edad || this.edad < 18) {
      this.edadValid = false;
      correcto = false; // Edad no especificada o menor de 18 años
    } else {
      this.edadValid = true;
    }

    // if (!this.telefono || this.telefono.trim().length === 0) {
    //   return false; // Teléfono vacío o solo espacios en blanco
    // }

    if (!this.email || !emailPattern.test(this.email)) {
      this.emailValid = false;
      correcto = false; // Email inválido o vacío
    } else {
      this.emailValid = true;
    }

    return correcto; // Todos los campos han pasado las validaciones
  }

}
