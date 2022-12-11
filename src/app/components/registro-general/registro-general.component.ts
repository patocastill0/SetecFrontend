import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Cargo } from 'src/app/modelo/cargo';
import { Cdcs } from 'src/app/modelo/cdcs';
import { Municipio } from 'src/app/modelo/municipio';
import { Region } from 'src/app/modelo/region';
import { Sector } from 'src/app/modelo/sector';
import { Trabajador } from 'src/app/modelo/trabajador';
import { MunicipioService } from 'src/app/servicios/municipio.service';
import { TrabajadorService } from 'src/app/servicios/trabajador.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registro-general',
  templateUrl: './registro-general.component.html',
  styleUrls: ['./registro-general.component.css']
})


export class RegistroGeneralComponent implements OnInit {
  trabajador = new Trabajador();
  municipio = new Municipio();
  muniarreglo : Municipio[];
  municipiosobser:Observable<any[]>;
  genero : string;
  sectorlista : Sector[];
  cargolista : Cargo[];
  regionlista : Region[];
  cdcslista : Cdcs[];
  autoMunicipio = new FormControl('');

  constructor(public trabajadorServicio:TrabajadorService, public municipioServicio:MunicipioService) {
  }

  ngOnInit(): void {
    this.municipiosobser = this.autoMunicipio.valueChanges.pipe(

      map(value => typeof value === 'string' ? value : value.rfc_contribuyente),
      mergeMap(value => value ? this._filterMunicipios(value) : []),
    );

    this.obtenerListaSector();
    this.obtenerListaCargo();
    this.obtenerListaRegion();
    this.obtenerListaCdcs();
    this.trabajador.hasactanacimiento=false;
    this.trabajador.hascomprobante=false;
    this.trabajador.hascurp=false;
    this.trabajador.hasine=false;
    //console.log(this.sectorlista)
  }

  crearTrabajador(trabajador){

    console.log(trabajador);
    this.trabajadorServicio.crearTrabajador(trabajador).subscribe(
      response=> {this.trabajador=response;
        swal('Trabajador Agregado',`Trabajador ${this.trabajador.nombre} ${this.trabajador.apPaterno} ${this.trabajador.apMaterno} creado con éxito`,'success');
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
  //<input name="municipio" [(ngModel)]="trabajador.municipio" type="text" class="form-control" id="floatingInputMunicipio" placeholder="name@example.com" [ngClass]="municipio.invalid && (municipio.dirty || municipio.touched)?'invalid-contorno':'form-controll'" #municipio="ngModel" required>
  //<label for="floatingInputMunicipio">Municipio</label>
  //<div class="invalid-relleno" *ngIf="municipio.invalid && (municipio.dirty || municipio.touched)">
         // <div  *ngIf="municipio.errors.required">
            //*Municipio Requerido
          //</div>
        //</div>
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

  mostrarDatosMunicipio(municipio?: Municipio): string | undefined {
    return municipio ? municipio.clavemunicipio + " " + municipio.nombreMunicipio : undefined;
  }

  seleccionarMunicipio(event: MatAutocompleteSelectedEvent): void {

    this.municipio = event.option.value as Municipio;
    this.trabajador.municipio = this.municipio.clavemunicipio;
    //this.autoMunicipio.setValue('');
    event.option.focus();
    event.option.deselect();
 }


 public _filterMunicipios(value: string): Observable<Municipio[]> {
  const filterValue = value.toLowerCase();

  return this.municipioServicio.obtenerListaMunicipios(filterValue);
}
}
