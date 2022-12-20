import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Instructorcurso } from '../modelo/instructorcurso';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class InstructorcursoService {
  private baseURL ="http://localhost:8080/api/instructorcurso";
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(public httpCliente:HttpClient, public authservice:AuthserviceService) { }

  private agregarAuthorizationHeader(){
    let token = this.authservice.token;
    if(token!=null){
      return this.httpHeaders.append('Authorization','Bearer ' +token);
    }
    return this.httpHeaders;
  }

  crearInstructorCursoServicio(instructorcurso:Instructorcurso):Observable<Instructorcurso>{
    return this.httpCliente.post<Instructorcurso>(`${this.baseURL}`,instructorcurso,{headers: this.agregarAuthorizationHeader()}).pipe(
      catchError(e=>{
        if(e.status==302){

        }
        return throwError(e);
      })
    );
  }

}
