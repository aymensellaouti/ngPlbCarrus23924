import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/say-hello.service';
import { CvService } from '../services/cv.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvService = inject(CvService);
  today = new Date();
  /**
   * Le cv sélectionné par click sur l'item
   */
  selectedCv$: Observable<Cv | null> = this.cvService.selectedCv$;
  /**
   * La liste des cvs à afficher
   */
  cvs: Cv[] = this.cvService.getCvs();
  // sayHello = new SayHelloService();
  constructor(
    private logger: LoggerService,
    private sayHello: SayHelloService
  ) {
    this.logger.loger('CvComponent');
    this.sayHello.sayHello();
    //  Méthode 1, préférer la Méthode 2
    // this.cvService.selectCvSubject.subscribe(cv => this.selectedCv = cv);
  }
  // onSelectCv(cv: Cv) {
  //   this.selectedCv = cv;
  // }
}
