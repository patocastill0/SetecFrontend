import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Cargo } from 'src/app/modelo/cargo';
import { Cdcs } from 'src/app/modelo/cdcs';
import { Region } from 'src/app/modelo/region';
import { Sector } from 'src/app/modelo/sector';
import { Trabajador } from 'src/app/modelo/trabajador';
import { TrabajadorService } from 'src/app/servicios/trabajador.service';

@Component({
  selector: 'app-registro-general',
  templateUrl: './registro-general.component.html',
  styleUrls: ['./registro-general.component.css']
})


export class RegistroGeneralComponent implements OnInit {
  trabajador = new Trabajador();
  genero : string;
  sectorlista : Sector[];
  cargolista : Cargo[];
  regionlista : Region[];
  cdcslista : Cdcs[];
  constructor(public trabajadorServicio:TrabajadorService) {
  }

  ngOnInit(): void {
    this.obtenerListaSector();
    this.obtenerListaCargo();
    this.obtenerListaRegion();
    this.obtenerListaCdcs();
    //console.log(this.sectorlista)
  }

  crearTrabajador(trabajador){
    console.log(trabajador);
    this.trabajadorServicio.crearTrabajador(trabajador).subscribe(
      response=> {this.trabajador=response;

                }
    );
  }
  obtenerListaSector(){
    this.trabajadorServicio.obtenerListaSector().subscribe(
      response=> {this.sectorlista=response;
                }
    );
  }
  obtenerListaCargo(){
    this.trabajadorServicio.obtenerListaCargo().subscribe(
      response=> {this.cargolista=response;
                }
    );
  }
  obtenerListaRegion(){
    this.trabajadorServicio.obtenerListaRegion().subscribe(
      response=> {this.regionlista=response;
                }
    );
  }
  obtenerListaCdcs(){
    this.trabajadorServicio.obtenerListaCdcs().subscribe(
      response=> {this.cdcslista=response;
                }
    );
  }

  validarCorreo(){
    let correo=this.trabajador.correoElectronico;
    //console.log("nombre correo ",this.trabajador.correoElectronico);

    if(correo===undefined){
      correo="";
    }
    var expCorreo=  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if(correo.match(expCorreo)){
      //console.log("netro al true");
      return true;

    }else{
      //console.log("netro al falso");
    return false;
    }
  }
  escribirCorreo(){

  }

}
