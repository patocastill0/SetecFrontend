import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../modelo/usuario';
import { AuthserviceService } from '../servicios/authservice.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:Usuario;
  constructor(public authService:AuthserviceService,
    public router:Router) {
      this.usuario=new Usuario();
    }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      swal({
        title: 'Ya Has iniciado Sesion',
        text: `¿${this.authService.usuario.userName} le gustaria cerrar Session?!`,
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, cerrar session!',
        cancelButtonText: 'No, cancelar',
      }).then((result) => {
        if (result.value) {
          this.authService.logout();
        } else {
          this.router.navigate(['/registro']);
        }
      });
    }
  }
 public  loginUsuarios():void{
    if(this.usuario.userName==null || this.usuario.password==null){
      swal('Error de Login','usuario o nombre vacios!','error');
      return;
    }
      this.authService.login(this.usuario).subscribe(
        response=> {
          this.authService.guardarUsuario(response.access_token);
          this.authService.guardarToken(response.access_token);
          this.router.navigate(['/registro']);
        },err=>{
          if(err.status==400){
            swal('Error de Login','usuario o contraseña Incorrectos!','error');
          }
        }
      )

 }
}
