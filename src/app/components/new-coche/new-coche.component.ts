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
    this.sqlService.addCoche(this.coche).subscribe(datos => {
      console.log(datos);
      this.router.navigate(["/perfil"]);
    });
  }
}
