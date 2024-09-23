import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  name = 'carrus';
  // Qu'est ce qu'on peut avoir ici ?
  // propriété : State
  /**
   * Définit si la fiv est visible ou pas
   * @param {boolean}
   *    *
   */
  isHidden = true;

  inputMessage = '';
  // méthodes : comportement le behaviour
  showHide() {
    this.isHidden = !this.isHidden;
  }

  changeMessage(message: string) {
    this.inputMessage = message;
  }
}
