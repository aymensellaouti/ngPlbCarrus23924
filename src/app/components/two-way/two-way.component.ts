import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent {

  two = 'initial Value';

  resetValue() {
    this.two = 'initial Value';
  }
}
