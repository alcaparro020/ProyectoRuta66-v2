import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SQLserviceService } from 'src/app/services/sqlservice.service';

@Component({
  selector: 'app-cancelar-evento',
  templateUrl: './cancelar-evento.component.html',
  styleUrls: ['./cancelar-evento.component.scss']
})
export class CancelarEventoComponent implements OnInit{

  constructor(private sqlService: SQLserviceService, private rutaActiva: ActivatedRoute, private router: Router) { }

  idEvento: string | null;

  ngOnInit(): void {
    this.idEvento = this.rutaActiva.snapshot.paramMap.get("Id");
    console.log(this.idEvento);
  }

  cancelarEvento(){
    console.log(this.idEvento);
    this.sqlService.cancelarEvento(this.idEvento!).subscribe(datos => {
      //console.log(datos);
      this.router.navigate(["/home"]);
    });
  }
}
