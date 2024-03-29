import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from 'src/app/login/login.component';
import { RegistroGeneralComponent } from './components/registro-general/registro-general.component';
import { DatosCdcComponent } from './components/registro-general/registro_pasos/datos-cdc/datos-cdc.component';
import { FormatoAfiliacionComponent } from './components/registro-general/registro_pasos/formato-afiliacion/formato-afiliacion.component';
import { FormatoRegistroComponent } from './components/registro-general/registro_pasos/formato-registro/formato-registro.component';
import { IntructorCursoComponent } from './components/registro-general/registro_pasos/intructor-curso/intructor-curso.component';
import { ListaTalleresComponent } from './components/registro-general/registro_pasos/lista-talleres/lista-talleres.component';
import { RegistroCdcComponent } from './components/registro-general/registro_pasos/registro-cdc/registro-cdc.component';
import { RegistroCluaComponent } from './components/registro-general/registro_pasos/registro-clua/registro-clua.component';
import { RegistroDatosComponent } from './components/registro-general/registro_pasos/registro-datos/registro-datos.component';
import { AuthGuard } from './login/guards/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},//redirige al path login
  {path:'login',component:LoginComponent},
  {path:'registro',component:RegistroGeneralComponent,canActivate:[AuthGuard]},
  {path:'registro/:id',component:RegistroGeneralComponent,canActivate:[AuthGuard]},
  {path:'datos',component:RegistroDatosComponent},
  {path:'datos/page/:page',component:RegistroDatosComponent},
  {path:'clua',component:RegistroCluaComponent,canActivate:[AuthGuard]},
  {path:'clua/:id',component:RegistroCluaComponent,canActivate:[AuthGuard]},
  {path:'clua/page/:page',component:RegistroCluaComponent,canActivate:[AuthGuard]},
  {path:'cdc',component:RegistroCdcComponent,canActivate:[AuthGuard]},
  {path:'formatoregistro',component:FormatoRegistroComponent,canActivate:[AuthGuard]},
  {path:'listatalleres',component:ListaTalleresComponent,canActivate:[AuthGuard]},
  {path:'instructorcurso',component:IntructorCursoComponent,canActivate:[AuthGuard]},
  {path: 'datoscurso',component:DatosCdcComponent,canActivate:[AuthGuard]},
  {path: 'formatoafiliacion',component:FormatoAfiliacionComponent,canActivate:[AuthGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
