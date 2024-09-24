import { Component } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  today = new Date();
  /**
   * Le cv sélectionné par click sur l'item
   */
  selectedCv: Cv | null = null;
  /**
   * La liste des cvs à afficher
   */
  cvs: Cv[] = [
    new Cv(
      1,
      'sellaouti',
      'aymen',
      'teacher',
      '      ',
      '1234',
      42
    ),
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

  onSelectCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
