import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/auth/services/auth.servcie';
import { APP_ROUTES } from 'src/app/config/app-routes.config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  authService = inject(AuthService);
  router = inject(Router);
  constructor(public translateService: TranslateService) {
    translateService.setDefaultLang('fr');
    translateService.addLangs(['en', 'fr']);
    const browserLang = translateService.getBrowserLang() ?? 'fr';
    translateService.use(browserLang.match(/en|fr/) ? browserLang : 'fr');
  }
  translate(language: string) {
    this.translateService.use(language);
  }

  logout() {
    this.authService.logout();
    this.router.navigate([APP_ROUTES.login]);
  }
}
