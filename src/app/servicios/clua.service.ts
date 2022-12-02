import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Clua } from '../modelo/clua';
import { Trabajador } from '../modelo/trabajador';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class CluaService {
  private baseURL ="http://localhost:8080/api/clua";

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});


  constructor(public httpCliente:HttpClient, public authservice:AuthserviceService) { }

  private agregarAuthorizationHeader(){
    let token = this.authservice.token;
    if(token!=null){
      return this.httpHeaders.append('Authorization','Bearer ' +token);
    }
    return this.httpHeaders;
  }

  crearCluaser(clua:Clua):Observable<Clua>{
    return this.httpCliente.post<Clua>(`${this.baseURL}`,clua).pipe(
      catchError(e=>{
        if(e.status==302){

        }
        return throwError(e);
      })
    );
  }

  obtenerListaCluas(pageNo: number):Observable<any>{
    return this.httpCliente.get(`${this.baseURL}/page/${pageNo}`).pipe(
      map((response: any)=>{
        return response
      })
    )
  }

}
