import { Component } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvs: Cv[] = [
    new Cv(1, 'sellaouti', 'aymen', 'teacher', 'rotating_card_profile3.png', '1234', 42),
    new Cv(2, 'morlet', 'jean', 'Dev Sénior', 'rotating_card_profile2.png', '2234', 25),
  ];
}
