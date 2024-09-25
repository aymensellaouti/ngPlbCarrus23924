import {  inject, Injectable } from '@angular/core';
import { Cv } from '../model/cv';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { APP_API } from 'src/app/config/app-api.config';




@Injectable({
  providedIn: 'root',
})
export class CvService {
  #cvs = [
    new Cv(1, 'sellaouti', 'aymen', 'teacher', '      ', '1234', 42),
    new Cv(
      2,
      'morlet',
      'jean',
      'Dev Sénior',
      'rotating_card_profile2.png',
      '2234',
      25
    ),
  ];

  // On définit notre flux: Cv1, Cv3, Cv1, Cv2 .....
  #selectCvSubject = new Subject<Cv>();

  // On encapsule la partie observateur et on partage uniquement l'observable
  /**
   * Le flux des cvs sélectionnés
   */
  selectedCv$ = this.#selectCvSubject.asObservable();

  http = inject(HttpClient);
  /**
   * Retourne la liste des cvs de notre API
   * @returns Observable<Cv[]>
   */
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APP_API.cv);
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Observable<Cv | null>
   */
  findCvById(id: number): Observable<Cv | null> {
    return this.http.get<Cv | null>(APP_API.cv + id);
  }

  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getFakeCvs(): Cv[] {
    return this.#cvs;
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findFakeCvById(id: number): Cv | null {
    return this.#cvs.find((c) => c.id == id) ?? null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    const index = this.#cvs.indexOf(cv);
    if (index != -1) {
      this.#cvs.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Ajoute le cv dans le flux des cvs sélectionnes
   *
   * @param cv le cv sélectionné
   */
  selectCv(cv: Cv): void {
    // On peut ajouter des tests ou de la logique
    this.#selectCvSubject.next(cv);
  }
}
