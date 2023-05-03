import { Component, OnInit } from '@angular/core';
import { EventoHome } from 'src/app/interfaces/evento-home';
import { Evento } from 'src/app/models/evento/evento.module';
import { SQLserviceService } from 'src/app/services/sqlservice.service';

@Component({
  selector: 'app-ver-eventos',
  templateUrl: './ver-eventos.component.html',
  styleUrls: ['./ver-eventos.component.scss']
})
export class VerEventosComponent implements OnInit{

  dni: string;
  idEventos: any;
  eventos: EventoHome[];

  constructor(private sqlService: SQLserviceService) { }

  ngOnInit() {
    this.eventos = [];
    this.sqlService.getUserLogged().subscribe(data => {
      this.dni = data.dni;
      this.sqlService.getRegistrosDni(data.dni).subscribe((idEventos: any) => {
        //this.idEventos = data;
        //console.log(idEventos);
        for (let index = 0; index < idEventos.length; index++) {
          this.sqlService.getEvento(idEventos[index].Id_Evento).subscribe((data: any) => {
            //console.log(data);
            const evento: EventoHome = {
              "Descripcion": data.Descripcion,
              "Fecha": data.Fecha,
              "Hora": data.Hora,
              "IdEvento": data.Id,
              "Imagenes": data.Imagenes,
              "Ubicacion": data.Ubicacion
            }
            //console.log(evento);
            this.eventos.push(evento);
          });
        }
      });
    });

  }
}
