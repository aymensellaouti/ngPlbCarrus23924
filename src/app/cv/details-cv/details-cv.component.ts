import { Component, inject } from "@angular/core";
import { Cv } from "../model/cv";
import { ActivatedRoute, Router } from "@angular/router";
import { CvService } from "../services/cv.service";
import { APP_ROUTES } from "src/app/config/app-routes.config";
import { catchError, EMPTY, Observable } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "src/app/auth/services/auth.servcie";


@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent {
  acr = inject(ActivatedRoute);
  cvService = inject(CvService);
  router = inject(Router);
  toastr = inject(ToastrService);
  authService = inject(AuthService);
  cv$: Observable<Cv | null> = this.cvService
    .findCvById(this.acr.snapshot.params['id'])
    .pipe(
      catchError(() => {
        this.router.navigate([APP_ROUTES.cv]);
        return EMPTY;
      })
    );
  constructor() {
    //const id = this.acr.snapshot.params['id'];
    // this.cv = this.cvService.findCvById(id);
    // V1
    // this.cvService.findCvById(id).subscribe({
    //   next: (cv) => this.cv = cv,
    //   error: () => this.router.navigate([APP_ROUTES.cv])
    // })
  }

  delete(cv: Cv) {
    this.cvService.deleteCvById(cv.id).subscribe({
      next: () => {
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (e) => {
        this.toastr.error(e.message);
      },
    });
  }
}
/**
 *  1 CvService => ajouter les méthodes deletCv et getCvById
 *  2 Ajouter la route detailCv
 *  3 DetailsCv => injecter ActivtedRoute et on va récupérer le
 *    paramètre id
 *     3-1 Cv existe on l'affiche
 *     3-2 Cv innexistant => redirection vers la listye des cvs
 *     (nb: il faut injecter le router)
 *  4- Ajouter le bouton details dans le dos de la carte
 *
 */
