import { Component, OnInit } from '@angular/core';
import { Trabajador } from 'src/app/modelo/trabajador';
import { AuthserviceService } from 'src/app/servicios/authservice.service';
import { TrabajadorService } from 'src/app/servicios/trabajador.service';

@Component({
  selector: 'app-registro-datos',
  templateUrl: './registro-datos.component.html',
  styleUrls: ['./registro-datos.component.css']
})
export class RegistroDatosComponent implements OnInit {

  constructor(public trabajadorService:TrabajadorService,
    public authService:AuthserviceService) { }
    trabajadores:Trabajador[];
    trabajador = new Trabajador();
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

  public obtenerInfoTrabajador(curp:string){
      this.trabajadorService
      .obtenerInfoTrabajador(curp)
      .subscribe(response => {
        this.trabajador =response;
      });
  }

  eliminarTrabajador(trabajador:Trabajador){

  }
}
