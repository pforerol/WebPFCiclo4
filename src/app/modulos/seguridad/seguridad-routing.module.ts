import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { LoginComponent } from './login/login.component';

// Se deben crear todos los componentes (botones, labels) que van en esta ruta de seguridad, como login, logut
// Recuperar contraseña, captcha, registrarse

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: "logout",
    component: CerrarSesionComponent,
  },{
    pathMatch: 'full',
    path: '',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
