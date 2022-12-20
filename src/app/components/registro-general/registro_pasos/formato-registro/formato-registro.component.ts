import { Component, OnInit } from '@angular/core';

import { Trabajador } from 'src/app/modelo/trabajador';
import { TrabajadorService } from 'src/app/servicios/trabajador.service';

@Component({
  selector: 'app-formato-registro',
  templateUrl: './formato-registro.component.html',
  styleUrls: ['./formato-registro.component.css']
})
export class FormatoRegistroComponent implements OnInit {
   date = new Date();
   trabajador = new Trabajador();
  constructor(public trabajadorservicio:TrabajadorService) {
   }

  ngOnInit(): void {

  }

  buscarfolio(event){
    let dato = event.target.value;

    if (event.key === "Enter"){

      this.trabajadorservicio.obtenerInfofolio(dato).subscribe(
        response => {
          console.log(response,"este es mi event");
          this.trabajador = response

        }
      );
    }

  }
  limpairdatos(){
    this.trabajador = new Trabajador();
  }


}
