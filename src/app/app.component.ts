import { Component, OnInit } from '@angular/core';
import { SQLserviceService } from './services/sqlservice.service';
import { CookieService } from 'ngx-cookie-service';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ProyectoRuta66-v2';
  login = "Iniciar sesion";
  rutaLogin = "/login";
  logeado = false;
  admin = false;

  constructor(private sqlService: SQLserviceService, private cookies: CookieService) { }

  ngOnInit() {
    this.sqlService.getUserLogged().subscribe(data => {
      //console.log(data);
      if (!data.nombre) {
        this.login = "Iniciar sesión";
        this.rutaLogin = "/login";
      } else {
        this.login = data.nombre;
        this.rutaLogin = "";
        this.logeado = true;
      }
      if (data.id == 15) {
        this.admin = true;
      }

      //this.sqlService.setToken(data.id);
      //this.router.navigate(["/"]);
    });
  }

  logOut() {
    this.cookies.delete("token");
  }
}
