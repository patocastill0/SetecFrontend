import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Curso } from '../modelo/curso';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private baseURL="http://localhost:8080/api/curso";
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});


  constructor(public httpCliente:HttpClient, public authservice:AuthserviceService) { }

  private agregarAuthorizationHeader(){
    let token = this.authservice.token;
    if(token!=null){
      return this.httpHeaders.append('Authorization','Bearer ' +token);
    }
    return this.httpHeaders;
  }

  crearCursoServicio(curso:Curso){
    return this.httpCliente.post<Curso>(`${this.baseURL}`,curso).pipe(
      catchError(e=>{
        if(e.status==302){

        }
        return throwError(e);
      })
    );
  }

  obtenerListaCursos(pageNo: number){
    return this.httpCliente.get(`${this.baseURL}/page/${pageNo}`).pipe(
      map((response: any)=>{
        return response
      })
    );
  }

}
