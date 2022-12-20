import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    public authService:AuthserviceService, public activatedRoute:ActivatedRoute) { }
    paginador:any;
    trabajadores:Trabajador[];
    trabajador = new Trabajador();
    pagina=0;
  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params=>{
      let page:number=+params.get('page');
      if(!page){
        page=0;
      }
      this.pagina=page;
      this.obtenerTrabajadores(page);
     }
     );


  }
  public obtenerTrabajadores(page:number){
      this.trabajadorService.obtenerListaTrabajadores(page).subscribe(
        response=>{
          this.trabajadores=response.contenido as Trabajador[]
          this.paginador=response;
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
