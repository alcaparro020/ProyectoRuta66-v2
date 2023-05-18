import { Component } from '@angular/core';
import { SQLserviceService } from '../../services/sqlservice.service';
import { EventoHome } from 'src/app/interfaces/evento-home';
import { Time } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  Eventos: any;
  imagenes: any;
  logeado = false;
  filtros: boolean;

  //filtros
  fecha: Date;
  hora: Time;
  numPlazas: number;
  permiteModificados: boolean;
  permiteSinHomologar: boolean;

  constructor(public userService: SQLserviceService) { }

  ngOnInit() {
    this.filtros = false;
    //this.numPlazas = 0;
    this.permiteModificados = false;
    this.permiteSinHomologar = false;

    this.userService.getUserLogged().subscribe(data => {
      //console.log(data);
      if (data.nombre) {
        this.logeado = true;
      }
      //this.sqlService.setToken(data.id);
      //this.router.navigate(["/"]);
    });
    this.userService.getEventos().subscribe((data: any) => {
      //console.log("mensaje1", data);
      this.Eventos = data;
      //console.log(this.Eventos);
    });
  }

  mostrarFiltros() {
    if (this.filtros == false) {
      this.filtros = true;
    } else {
      this.filtros = false;
    }
  }

  filtrarEventos() {
    let objFiltro = {
      "fecha": this.fecha,
      "hora": this.hora,
      "numPlazas": this.numPlazas,
      "permiteModificados": this.permiteModificados,
      "permiteSinHomologar": this.permiteSinHomologar
    }
    this.userService.getEventosFiltros(objFiltro).subscribe((data: any) => {
      //console.log(data);
      this.Eventos = data;
    });
  }

}
