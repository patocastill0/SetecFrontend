import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Instructor } from '../modelo/instructor';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  private baseURL = "http://localhost:8080/api/instructor";
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(public httpCliente:HttpClient, public authservice:AuthserviceService) { }

  private agregarAuthorizationHeader(){
    let token = this.authservice.token;
    if(token!=null){
      return this.httpHeaders.append('Authorization','Bearer ' +token);
    }
    return this.httpHeaders;
  }

  crearInstructorServicio(instructor:Instructor):Observable<Instructor>{
    return this.httpCliente.post<Instructor>(`${this.baseURL}`,instructor).pipe(
      catchError(e=>{
        if(e.status==302){

        }
        return throwError(e);
      })
    );
  }

  obtenerListaInstructores(pageNo: number){
    return this.httpCliente.get(`${this.baseURL}/page/${pageNo}`).pipe(
      map((response: any)=>{
        return response
      })
    );
  }
}
