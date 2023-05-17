import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coche } from 'src/app/models/coche/coche.module';
import { RegistroEventoModule } from 'src/app/models/registro-evento/registro-evento.module';
import { SQLserviceService } from 'src/app/services/sqlservice.service';

@Component({
  selector: 'app-registro-evento',
  templateUrl: './registro-evento.component.html',
  styleUrls: ['./registro-evento.component.scss']
})
export class RegistroEventoComponent implements OnInit {

  idEvento: any;
  dni_usuario: string;
  cochesUser: Coche[];
  matriculaSeleccionada: string;
  registro: RegistroEventoModule;
  participarCoche: boolean;

  constructor(private sqlService: SQLserviceService, private rutaActiva: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.participarCoche = true;
    let numParticipantes = 0;
    let numEventoParticipantes = 0;
    this.idEvento = this.rutaActiva.snapshot.paramMap.get("Id");
    this.sqlService.getUserLogged().subscribe(data => {
      this.dni_usuario = data.dni;
      this.sqlService.getCoches(data.dni).subscribe((data: any) => {
        //console.log("mensaje1", data);
        this.cochesUser = data;
      });
    });
    this.sqlService.getRegistros(this.idEvento).subscribe((dato: any) => {
      //console.log("1", dato.length)
      numParticipantes = dato.length;
      //console.log("1", numParticipantes)
      this.sqlService.getEvento(this.idEvento).subscribe((dato: any) => {
        //console.log("2", dato[8])
        numEventoParticipantes = dato[8];
        //console.log("2", numEventoParticipantes)
        this.comprobarParticipantes(numParticipantes, numEventoParticipantes);
      });
    });
  }

  comprobarParticipantes(numPar, numEve) {
    //console.log("numParticipantes", numPar)
    //console.log("numEventoParticipantes", numEve)
    if (numPar >= numEve) {
      this.participarCoche = false;
    } else {
      this.participarCoche = true;
    }
    //console.log(this.participarCoche);
  }

  registrarParticipante() {
    this.registro = new RegistroEventoModule(this.dni_usuario, this.idEvento, "1", this.matriculaSeleccionada);
    //console.log(this.registro);
    this.sqlService.newRegistro(this.registro).subscribe(dato => {
      //console.log(dato);
      this.router.navigate(["/home"]);
    });
  }

  registrarSinParticipar() {
    this.registro = new RegistroEventoModule(this.dni_usuario, this.idEvento, "0", null);
    //console.log(this.registro);
    this.sqlService.newRegistro(this.registro).subscribe(dato => {
      //console.log(dato);
      this.router.navigate(["/home"]);
    });
  }
}
