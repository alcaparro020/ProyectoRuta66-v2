import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coche } from 'src/app/models/coche/coche.module';
import { SQLserviceService } from 'src/app/services/sqlservice.service';

@Component({
  selector: 'app-new-coche',
  templateUrl: './new-coche.component.html',
  styleUrls: ['./new-coche.component.scss']
})
export class NewCocheComponent implements OnInit {

  Dni_Propietario: string;
  Matricula: string;
  Marca: string;
  Modelo: string;
  Color: string;
  Modificado: boolean;
  Homologado: boolean;
  coche: Coche;

  matriculaValidate: boolean = true;
  marcaValidate: boolean = true;
  modeloValidate: boolean = true;
  colorValidate: boolean = true;

  constructor(private sqlService: SQLserviceService, private router: Router) { }

  ngOnInit(): void {
    this.sqlService.getUserLogged().subscribe(data => {
      console.log(data.dni);
      this.Dni_Propietario = data.dni;
    });
  }

  agregarCoche() {

    let auxModificado;
    let auxHomologado;
    if (this.Modificado == true) {
      auxModificado = "1";
    } else {
      auxModificado = "0";
    }
    if (this.Homologado == true) {
      auxHomologado = "1";
    } else {
      auxHomologado = "0";
    }
    console.log(auxModificado);
    console.log(auxHomologado);
    this.coche = new Coche(this.Dni_Propietario, this.Matricula, this.Marca, this.Modelo, this.Color, auxModificado, auxHomologado);
    console.log(this.coche);
    if (this.validateForm()) {
      this.sqlService.addCoche(this.coche).subscribe(datos => {
        console.log(datos);
        this.router.navigate(["/perfil"]);
      });
    }
  }

  validateForm(): boolean {
    const matriculaPattern = /^\d{4}\s[A-Z]{3}$/;
    let correcto = true;

    if (!this.Matricula || !matriculaPattern.test(this.Matricula)) {
      this.matriculaValidate = false;
      correcto = false; // Matrícula inválida o vacía
    } else {
      this.matriculaValidate = true;
    }

    if (!this.Marca || this.Marca.trim().length === 0) {
      this.marcaValidate = false
      correcto = false; // Marca vacía o solo espacios en blanco
    } else {
      this.marcaValidate = true;
    }

    if (!this.Modelo || this.Modelo.trim().length === 0) {
      this.modeloValidate = false;
      correcto = false; // Modelo vacío o solo espacios en blanco
    } else {
      this.modeloValidate = true;
    }

    if (!this.Color || this.Color.trim().length === 0) {
      this.colorValidate = false;
      correcto = false; // Color vacío o solo espacios en blanco
    } else {
      this.colorValidate = true;
    }

    return correcto; // Todos los campos han pasado las validaciones
  }

}
