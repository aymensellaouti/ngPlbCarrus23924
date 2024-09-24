import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngPlbCarrus23924';
  toastr = inject(ToastrService);
  constructor() {
    this.toastr.info('Bonjour Tout le monde :D');
  }
}
