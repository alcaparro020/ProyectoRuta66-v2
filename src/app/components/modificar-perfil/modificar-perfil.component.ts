import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario/usuario.module';
import { SQLserviceService } from 'src/app/services/sqlservice.service';

@Component({
  selector: 'app-modificar-perfil',
  templateUrl: './modificar-perfil.component.html',
  styleUrls: ['./modificar-perfil.component.scss']
})
export class ModificarPerfilComponent implements OnInit {

  dni: string | null;
  nombre: string;
  apellidos: string;
  edad: number;
  telefono: number;
  email: string;
  usuarioModificar: Usuario;

  constructor(private sqlService: SQLserviceService, private rutaActiva: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.dni = this.rutaActiva.snapshot.paramMap.get("dni");
    this.sqlService.getUserDni(this.dni!).subscribe((data: any) => {
      this.nombre = data.nombre;
      this.apellidos = data.apellidos;
      this.edad = data.edad;
      this.telefono = data.telefono;
      this.email = data.email;
    });
  }

  modificarPerfil() {
    this.usuarioModificar = new Usuario(this.dni!, this.nombre, this.apellidos, this.edad, this.email, this.telefono, "");
    this.sqlService.modifyUserDni(this.usuarioModificar).subscribe(data => {
      this.router.navigate(["/perfil"]);
    });
  }

}
