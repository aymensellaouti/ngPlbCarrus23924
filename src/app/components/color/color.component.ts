import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent {
  defaultColor = 'red';

  /**
   * La variable quie définit la couleur de la div
   */
  bgcolor = this.defaultColor;

  /**
   * Permet de changer la couleur du background de la div
   * @param color
   */
  changeColor(color: HTMLInputElement) {
    this.bgcolor = color.value;
    color.value = '';
  }
  /**
   * Remet à jour la couleur par défaut
   */
  reset() {
    this.bgcolor = this.defaultColor;
  }
}
