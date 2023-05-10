import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SQLserviceService } from 'src/app/services/sqlservice.service';

@Component({
  selector: 'app-darse-baja',
  templateUrl: './darse-baja.component.html',
  styleUrls: ['./darse-baja.component.scss']
})
export class DarseBajaComponent implements OnInit {

  constructor(private sqlService: SQLserviceService, private rutaActiva: ActivatedRoute, private router: Router, private cookies: CookieService) { }

  dni: any;

  ngOnInit(): void {
    this.dni = this.rutaActiva.snapshot.paramMap.get("dni");
    console.log(this.dni);
  }

  darseBaja() {
    //console.log(this.dni);
    this.sqlService.getEventosDni(this.dni).subscribe((datos: any) => {
      //console.log(datos);
      this.sqlService.darseBaja(this.dni, datos.Id).subscribe(datos => {
        console.log(datos);
        this.cookies.delete("token");
        this.router.navigate(["/home"]);
      });
    });
  }
}
