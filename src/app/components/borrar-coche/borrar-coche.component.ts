import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SQLserviceService } from 'src/app/services/sqlservice.service';

@Component({
  selector: 'app-borrar-coche',
  templateUrl: './borrar-coche.component.html',
  styleUrls: ['./borrar-coche.component.scss']
})
export class BorrarCocheComponent implements OnInit{

  constructor(private sqlService: SQLserviceService, private rutaActiva: ActivatedRoute, private router: Router) { }

  Matricula: any;

  ngOnInit(): void {
    this.Matricula = this.rutaActiva.snapshot.paramMap.get("Matricula");
    console.log(this.Matricula);
  }

  borrarCoche(){
    this.sqlService.BorrarCoche(this.Matricula).subscribe(datos => {
      this.router.navigate(["/perfil"]);
    });
  }
}
