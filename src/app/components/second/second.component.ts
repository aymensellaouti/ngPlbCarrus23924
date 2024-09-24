import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  template: `
    <h2>Je suis le second compenent</h2>
  `,
  styles: [``]
})
export class SecondComponent {
  activatedRoute = inject(ActivatedRoute);
}
