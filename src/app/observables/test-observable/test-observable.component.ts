import { Component, inject, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { filter, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent implements OnDestroy {
  myObservabe$: Observable<number>;
  subscription: Subscription;
  toastr = inject(ToastrService);
  constructor() {
    this.myObservabe$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });
    // setTimeout(() => {
      this.myObservabe$.subscribe((val) => {
        console.log(val);
      });
    // }, 3000)

    this.subscription = this.myObservabe$
    // 5 4 3 2 1
    .pipe(
      map( x => x * 3),
      // 15 12 9 6 3
      filter( data => !(data%2))
      // 12 6
    )
    .subscribe({
      next: (mesDonnees) => { this.toastr.info('' + mesDonnees)},
      error: (e) => {},
      complete: () => {this.toastr.warning('Fin du compte à rebours !!! ')}
    })

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
