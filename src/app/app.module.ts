import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroGeneralComponent } from './components/registro-general/registro-general.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistroDatosComponent } from './components/registro-general/registro_pasos/registro-datos/registro-datos.component';
import { RegistroCluaComponent } from './components/registro-general/registro_pasos/registro-clua/registro-clua.component';
import { RegistroCdcComponent } from './components/registro-general/registro_pasos/registro-cdc/registro-cdc.component';
import { FormatoRegistroComponent } from './components/registro-general/registro_pasos/formato-registro/formato-registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { DatosPersonalesComponent } from './components/registro-general/registro_pasos/datos-personales/datos-personales.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroGeneralComponent,
    RegistroDatosComponent,
    RegistroCluaComponent,
    RegistroCdcComponent,
    FormatoRegistroComponent,
    FormatoRegistroComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }