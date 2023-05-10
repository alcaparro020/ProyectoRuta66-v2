import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { NewCocheComponent } from './components/new-coche/new-coche.component';
import { ModificarCocheComponent } from './components/modificar-coche/modificar-coche.component';
import { BorrarCocheComponent } from './components/borrar-coche/borrar-coche.component';
import { NewEventoComponent } from './components/new-evento/new-evento.component';
import { VerEventoComponent } from './components/ver-evento/ver-evento.component';
import { RegistroEventoComponent } from './components/registro-evento/registro-evento.component';
import { ModificarPerfilComponent } from './components/modificar-perfil/modificar-perfil.component';
import { VerEventosComponent } from './components/ver-eventos/ver-eventos.component';
import { VerEventosCreadosComponent } from './components/ver-eventos-creados/ver-eventos-creados.component';
import { ModificarEventoComponent } from './components/modificar-evento/modificar-evento.component';
import { CancelarEventoComponent } from './components/cancelar-evento/cancelar-evento.component';
import { DarseBajaComponent } from './components/darse-baja/darse-baja.component';

const routes: Routes = [
  {path: "login", component:LoginComponent},
  {path: "register", component:RegisterComponent},
  {path: "home", component:HomeComponent},
  {path: "perfil", component:PerfilComponent},
  {path: "newCoche", component:NewCocheComponent},
  {path: "modificarCoche/:Matricula", component:ModificarCocheComponent},
  {path: "borrarCoche/:Matricula", component:BorrarCocheComponent},
  {path: "newEvento", component:NewEventoComponent},
  {path: "verEvento/:Id", component:VerEventoComponent},
  {path: "registroEvento/:Id", component:RegistroEventoComponent},
  {path: "modificarPerfil/:dni", component:ModificarPerfilComponent},
  {path: "verEventos", component:VerEventosComponent},
  {path: "verEventosCreados", component:VerEventosCreadosComponent},
  {path: "modificarEvento/:Id", component:ModificarEventoComponent},
  {path: "cancelarEvento/:Id", component:CancelarEventoComponent},
  {path: "darseBaja/:dni", component:DarseBajaComponent},
  {path: "", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
