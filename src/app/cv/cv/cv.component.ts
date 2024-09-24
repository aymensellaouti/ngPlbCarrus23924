import { Component } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/say-hello.service';

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
  // sayHello = new SayHelloService();
  constructor(
    private logger: LoggerService,
    private sayHello: SayHelloService
  ) {
    this.logger.loger('CvComponent');
    this.sayHello.sayHello();
  }
  onSelectCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
