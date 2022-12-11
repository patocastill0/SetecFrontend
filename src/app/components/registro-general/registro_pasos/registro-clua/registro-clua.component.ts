import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clua } from 'src/app/modelo/clua';
import { Trabajador } from 'src/app/modelo/trabajador';
import { Trabajadorclua } from 'src/app/modelo/trabajadorclua';
import { CluaService } from 'src/app/servicios/clua.service';
import { TrabajadorService } from 'src/app/servicios/trabajador.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registro-clua',
  templateUrl: './registro-clua.component.html',
  styleUrls: ['./registro-clua.component.css']
})
export class RegistroCluaComponent implements OnInit {

  constructor(public activateRouter:ActivatedRoute,public trabajadorservicio:TrabajadorService, public cluaservicio:CluaService) { }
  trabajador:Trabajador ;
  clua = new Clua();
  cluacompleto = "";
  trabajadorcluas:Trabajadorclua[];

  ngOnInit(): void {
    this.cargarTrabajador();
    this.ObtenerCluas(0);
  }

  cargarTrabajador(): void{
    this.activateRouter.params.subscribe(
      params => {
        let id = params['id'];
        if(id){
          this.trabajadorservicio.obtenerTrabajador(id).subscribe(
            trabajador => {this.trabajador = trabajador
             }

          )
        }
      }
    )
  }
  crearClua(){
    this.clua.trabajadordto=this.trabajador;
    console.log(this.clua);
    this.cluaservicio.crearCluaser(this.clua).subscribe(
      response=> {swal('Clua Creada',`Clua ${this.clua.idclua} creada con éxito`,'success');
    }
    )
  }
  onKeyUp(event){
    this.cluacompleto= this.clua.anioafiliacion +""+ this.trabajador.sector +""+ this.trabajador.cargo +""+
      this.trabajador.municipio+""+this.trabajador.region+""

  }
  ObtenerCluas(page:number){
    this.cluaservicio.obtenerListaCluas(page).subscribe(
      response=>{
        this.trabajadorcluas=response.contenido as Trabajadorclua[]
      }
    )
  }

}
