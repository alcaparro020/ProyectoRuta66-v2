import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/app/models/coche/coche.module';
import { SQLserviceService } from 'src/app/services/sqlservice.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-modificar-coche',
  templateUrl: './modificar-coche.component.html',
  styleUrls: ['./modificar-coche.component.scss']
})
export class ModificarCocheComponent implements OnInit {

  Dni_Propietario: string;
  Matricula: any;
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

  constructor(private sqlService: SQLserviceService, private rutaActiva: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.Matricula = this.rutaActiva.snapshot.paramMap.get("Matricula");
    console.log(this.Matricula);
    this.sqlService.getCoche(this.Matricula).subscribe((data: any) => {
      console.log(data);
      this.Dni_Propietario = data.Dni_Propietario;
      this.Marca = data.Marca;
      this.Modelo = data.Modelo;
      this.Color = data.Color;
      let auxModificado;
      let auxHomologado;
      if (data.Modificado == "1") {
        auxModificado = true;
      } else {
        auxModificado = false;
      }
      if (data.Homologado == "1") {
        auxHomologado = true;
      } else {
        auxHomologado = false;
      }
      this.Modificado = auxModificado;
      this.Homologado = auxHomologado;
    });

  }

  ModificarCoche() {
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
      this.sqlService.modifyCoche(this.coche).subscribe(datos => {
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
