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
    this.sqlService.modifyCoche(this.coche).subscribe(datos => {
      console.log(datos);
      this.router.navigate(["/perfil"]);
    });
  }
}
