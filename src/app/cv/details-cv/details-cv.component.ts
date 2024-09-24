import { Component, inject } from "@angular/core";
import { Cv } from "../model/cv";
import { ActivatedRoute, Router } from "@angular/router";
import { CvService } from "../services/cv.service";
import { APP_ROUTES } from "src/app/config/app-routes.config";


@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent {
  cv: Cv | null = null;
  acr = inject(ActivatedRoute);
  cvService = inject(CvService);
  router = inject(Router);
  constructor() {
    const id = this.acr.snapshot.params['id'];
    this.cv = this.cvService.findCvById(id);
    if (!this.cv) this.router.navigate([APP_ROUTES.cv]);
  }

  delete() {
    if(this.cv) {
      this.cvService.deleteCv(this.cv);
      this.router.navigate([APP_ROUTES.cv]);
    }
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
