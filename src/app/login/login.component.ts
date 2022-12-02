import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../modelo/usuario';
import { AuthserviceService } from '../servicios/authservice.service';

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
    if(this.authService.isAuthenticated){
      console.log("Sesion iniciada");
    }
  }
 public  loginUsuarios():void{
    if(this.usuario.userName==null || this.usuario.password==null){
      console.log("Error de Login: usuario o password vacios");
      return;
    }
      this.authService.login(this.usuario).subscribe(
        response=> {
          this.authService.guardarUsuario(response.access_token);
          this.authService.guardarToken(response.access_token);
          this.router.navigate(['/registro']);
        }
      )

 }
}
