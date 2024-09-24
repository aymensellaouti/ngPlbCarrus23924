import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appRainbow][type="text"]',
})
export class RainbowDirective {
  // Tu dois t'occuper de la couleur de l'"l"ment qui t'accueille
  @HostBinding('style.color') color = 'black';
  // Tu dois t'occuper de la couleur de la bordure de l'"l"ment qui t'accueille
  @HostBinding('style.borderColor') borderColor = 'black';
  constructor() {
    console.log('RainbowDirective');

  }
  // Quand tu entend un keyup exécute la méthode onKeyUp
  @HostListener('keyup') onKeyUp() {
    this.color = this.getRandomColor();
    this.borderColor = this.getRandomColor();
  }

  private getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
