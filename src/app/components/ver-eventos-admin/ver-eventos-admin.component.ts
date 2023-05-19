import { Component, OnInit } from '@angular/core';
import { SQLserviceService } from 'src/app/services/sqlservice.service';

@Component({
  selector: 'app-ver-eventos-admin',
  templateUrl: './ver-eventos-admin.component.html',
  styleUrls: ['./ver-eventos-admin.component.scss']
})
export class VerEventosAdminComponent implements OnInit {

  dni: string;
  idEventos: any;
  eventos: any[];

  constructor(private sqlService: SQLserviceService) { }

  ngOnInit() {
    this.eventos = [];
      this.sqlService.getEventos().subscribe((data: any) => {
        //console.log("mensaje1", data);
        this.eventos = data;
        //console.log(this.Eventos);
      });
  }
}
