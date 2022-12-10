import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from './servicios/authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registro-control-frontend';

  constructor(public authService: AuthserviceService, public router: Router) {}

  logout():void{
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
