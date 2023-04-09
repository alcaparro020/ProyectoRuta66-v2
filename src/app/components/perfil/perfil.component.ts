import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SQLserviceService } from 'src/app/services/sqlservice.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  usuario = "";
  apellidos = "";
  edad = "";
  email = "";
  telefono = "";
  constructor(private sqlService: SQLserviceService, private cookies: CookieService) { }
  ngOnInit() {
    this.sqlService.getUserLogged().subscribe(data => {
      console.log(data);
      this.usuario = data.nombre;
      this.apellidos = data.apellidos;
      this.edad = data.edad;
      this.email = data.email;
      this.telefono = data.telefono;
      //this.sqlService.setToken(data.id);
      //this.router.navigate(["/"]);
    });
  }
}
