import { Component } from '@angular/core';
import { SQLserviceService } from '../../services/sqlservice.service';
import { EventoHome } from 'src/app/interfaces/evento-home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  Eventos: any;
  imagenes: any;
  logeado = false;

  constructor(public userService: SQLserviceService) { }

  ngOnInit() {
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

}
