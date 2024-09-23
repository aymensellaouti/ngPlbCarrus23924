import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent {
  // fils(message)
  @Input()
  message = 'init message';
  @Output()
  ccPapa = new EventEmitter<string>();
  /*
  1- Créer un event
  2- Déclencher ou bien l'emettre (data à l inytérieur)

  */

  sendMessageToPapa() {
    this.ccPapa.emit('cc papa');
  }
}
