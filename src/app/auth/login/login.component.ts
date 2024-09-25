import { Component, inject } from '@angular/core';
import { Credentials } from '../dto/credentials.dto';
import { AuthService } from '../services/auth.servcie';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/config/app-routes.config';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authService= inject(AuthService);
  router = inject(Router);
  toastr = inject(ToastrService);
  login(credentials:Credentials) {
    this.authService.login(credentials).subscribe({
      next: (response) => {
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (e)=> {
        this.toastr.error(`Veuillez vérifier vos credentials :(`);
      }
    })
  }
}
