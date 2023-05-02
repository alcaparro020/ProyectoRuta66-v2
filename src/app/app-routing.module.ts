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
  {path: "", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
