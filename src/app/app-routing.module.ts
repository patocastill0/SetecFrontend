import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from 'src/app/login/login.component';
import { RegistroGeneralComponent } from './components/registro-general/registro-general.component';
import { FormatoRegistroComponent } from './components/registro-general/registro_pasos/formato-registro/formato-registro.component';
import { RegistroCdcComponent } from './components/registro-general/registro_pasos/registro-cdc/registro-cdc.component';
import { RegistroCluaComponent } from './components/registro-general/registro_pasos/registro-clua/registro-clua.component';
import { RegistroDatosComponent } from './components/registro-general/registro_pasos/registro-datos/registro-datos.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},//redirige al path login
  {path:'login',component:LoginComponent},
  {path:'registro',component:RegistroGeneralComponent},
  {path:'datos',component:RegistroDatosComponent},
  {path:'clua',component:RegistroCluaComponent},
  {path:'clua/:id',component:RegistroCluaComponent},
  {path:'cdc',component:RegistroCdcComponent},
  {path:'formatoregistro',component:FormatoRegistroComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
