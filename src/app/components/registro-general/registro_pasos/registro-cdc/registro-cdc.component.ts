import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Cdcs } from 'src/app/modelo/cdcs';
import { Curso } from 'src/app/modelo/curso';
import { Trabajador } from 'src/app/modelo/trabajador';
import { Trabajadorcurso } from 'src/app/modelo/trabajadorcurso';
import { TrabajadorService } from 'src/app/servicios/trabajador.service';
import { TrabajadorcursoService } from 'src/app/servicios/trabajadorcurso.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registro-cdc',
  templateUrl: './registro-cdc.component.html',
  styleUrls: ['./registro-cdc.component.css']
})
export class RegistroCdcComponent implements OnInit {
  trabajadorescu:Trabajador[];
  trabajadores:Observable<any[]>;
    trabajador:Trabajador;
    trabacursos = new Trabajadorcurso();
    arreglocursos :Trabajadorcurso[];
    cursoslista : Curso[];
    autoTrabajador = new FormControl('');
    cdcslista : Cdcs[];
  constructor(public activateRouter: ActivatedRoute,public trabajadorservicio: TrabajadorService, public trabajadorcursoService:TrabajadorcursoService) { }

  ngOnInit(): void {
    this.trabajadores = this.autoTrabajador.valueChanges.pipe(

      map(value => typeof value === 'string' ? value : value.rfc_contribuyente),
      mergeMap(value => value ? this._filterTrabajadorNoUsuario(value) : []),
    );

    this.cargarTrabajador();
    this.obtenerTrabajadorescu(0);
    this.obtenerListaCurso();
    this.obtenerListaCdcs();
  }

  cargarTrabajador(): void{
    this.activateRouter.params.subscribe(
      params => {
        let id = params['id'];
        if(id){
          this.trabajadorservicio.obtenerTrabajador(id).subscribe(
            trabajador => { this.trabajador = trabajador }
          )
        }
      }
    )
  }

  creartrabajadorCurso(){

    this.trabacursos.idtrabajador= this.trabajador.curp;
    console.log(this.trabacursos);
    this.trabajadorcursoService.creartrabajadorcurso(this.trabacursos).subscribe(
      response => {
        swal('Curso Agregado',`Curso agregado con éxito`,'success');

      }
    )
  }

  obtenerListaCurso(){
    this.trabajadorcursoService.obtenerListaCurso().subscribe(
      response => {this.cursoslista=response;
                }
    );
  }

  public obtenerTrabajadorescu(page:number){
    this.trabajadorcursoService.obtenerListaTrabajadorescu(page).subscribe(
      response=>{
        this.trabajadorescu=response.contenido as Trabajador[]
      }
    )
  }

  compararEmpleados(o1:Trabajador,o2:Trabajador){
    if(o1===undefined && o2===undefined){
      console.log("anda aqui en el comparar");
      return true;
    }
    console.log(o2+" obj 2")
    return o1===null || o2===null || o1===undefined || o2===undefined? false:o1.curp===o2.curp;
  }

  mostrarDatosTrabajador(trabajador?: Trabajador): string | undefined {
    return trabajador ? trabajador.nombre + " " + trabajador.apPaterno + " " +  trabajador.apMaterno : undefined;
  }

  seleccionarTrabajador(event: MatAutocompleteSelectedEvent): void {

    this.trabajador = event.option.value as Trabajador;
    this.autoTrabajador.setValue('');
    event.option.focus();
    event.option.deselect();

    this.trabajadorcursoService.obtenerCursoTrabajador(this.trabajador.curp).subscribe(
      response => this.arreglocursos = response
    );
 }



 public _filterTrabajadorNoUsuario(value: string): Observable<Trabajador[]> {
  const filterValue = value.toLowerCase();

  return this.trabajadorservicio.obtenerListaTrabajadoresNoUsuarios(filterValue);
}

obtenerListaCdcs(){
  this.trabajadorservicio.obtenerListaCdcs().subscribe(
    response=> {this.cdcslista=response;
              }
  );
}

}
