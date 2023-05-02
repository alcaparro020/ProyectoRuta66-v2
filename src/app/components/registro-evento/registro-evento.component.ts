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

  constructor(private sqlService: SQLserviceService, private rutaActiva: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.idEvento = this.rutaActiva.snapshot.paramMap.get("Id");
    this.sqlService.getUserLogged().subscribe(data => {
      this.dni_usuario = data.dni;
      this.sqlService.getCoches(data.dni).subscribe((data: any) => {
        //console.log("mensaje1", data);
        this.cochesUser = data;
      });
    });
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
