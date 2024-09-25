import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/say-hello.service';
import { CvService } from '../services/cv.service';
import { catchError, EMPTY, Observable, of, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvService = inject(CvService);
  toastr = inject(ToastrService);
  today = new Date();
  /**
   * Le cv sélectionné par click sur l'item
   */
  selectedCv$: Observable<Cv | null> = this.cvService.selectedCv$;
  /**
   * La liste des cvs à afficher
   */
  // V2
  cvs$: Observable<Cv[]> = this.cvService.getCvs()
  .pipe(
    tap(cvs => {
      console.log('CVS:', cvs);
    }),
    catchError(e => {
      this.toastr.error(`Attention les données sont fictives, merci de contacter l'admin !!!`)
      return of(this.cvService.getFakeCvs());
    })
  );
  // sayHello = new SayHelloService();
  constructor(
    private logger: LoggerService,
    private sayHello: SayHelloService
  ) {
    this.logger.loger('CvComponent');
    this.sayHello.sayHello();
    // V1 : consomation de l'API

    // this.cvService.getCvs().subscribe({
    //   next: (cvs) => {this.cvs = cvs},
    //   error: (e) => {
    //     this.cvs = this.cvService.getFakeCvs();
    //     this.toastr.error(`Attention les données sont fictives, merci de contacter l'admin !!!`)
    //   }
    // })

    //  Méthode 1, préférer la Méthode 2
    // this.cvService.selectCvSubject.subscribe(cv => this.selectedCv = cv);
  }
  // onSelectCv(cv: Cv) {
  //   this.selectedCv = cv;
  // }
}
