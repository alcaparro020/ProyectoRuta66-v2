import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SQLserviceService } from 'src/app/services/sqlservice.service';

@Component({
  selector: 'app-borrar-participante-admin',
  templateUrl: './borrar-participante-admin.component.html',
  styleUrls: ['./borrar-participante-admin.component.scss']
})
export class BorrarParticipanteAdminComponent implements OnInit {

  idEvento: string | null;
  idParticipante: string | null;

  constructor(private sqlService: SQLserviceService, private rutaActiva: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.idEvento = this.rutaActiva.snapshot.paramMap.get("Id");
    this.idParticipante = this.rutaActiva.snapshot.paramMap.get("idParticipante");
  }

  borrarParticipante() {
    console.log(this.idEvento);
    console.log(this.idParticipante);
    this.sqlService.borrarParticipante(this.idParticipante!, this.idEvento!).subscribe(datos => {
      //console.log(datos);
      this.router.navigate(["/verEventosAdmin"]);
    });
  }
}
