import { Component, OnInit } from '@angular/core';
import { Trabajador } from 'src/app/modelo/trabajador';
import { TrabajadorService } from 'src/app/servicios/trabajador.service';

@Component({
  selector: 'app-registro-datos',
  templateUrl: './registro-datos.component.html',
  styleUrls: ['./registro-datos.component.css']
})
export class RegistroDatosComponent implements OnInit {

  constructor(public trabajadorService:TrabajadorService) { }
    trabajadores:Trabajador[];
  ngOnInit(): void {
    this.obtenerTrabajadores(0);
  }
  public obtenerTrabajadores(page:number){
      this.trabajadorService.obtenerListaTrabajadores(page).subscribe(
        response=>{
          this.trabajadores=response.contenido as Trabajador[]
        }
      ) //Detecta un cambio en la base de datos
  }
}
