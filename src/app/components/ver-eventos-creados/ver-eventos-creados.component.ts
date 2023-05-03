import { Component, OnInit } from '@angular/core';
import { EventoHome } from 'src/app/interfaces/evento-home';
import { SQLserviceService } from 'src/app/services/sqlservice.service';

@Component({
  selector: 'app-ver-eventos-creados',
  templateUrl: './ver-eventos-creados.component.html',
  styleUrls: ['./ver-eventos-creados.component.scss']
})
export class VerEventosCreadosComponent implements OnInit {

  dni: string;
  idEventos: any;
  eventos: any[];

  constructor(private sqlService: SQLserviceService) { }

  ngOnInit() {
    this.eventos = [];
    this.sqlService.getUserLogged().subscribe(data => {
      this.dni = data.dni;
      this.sqlService.getEventosDni(data.dni).subscribe((data: any) => {
        //console.log(data);
        this.eventos = data;
      });
    });

  }
}
