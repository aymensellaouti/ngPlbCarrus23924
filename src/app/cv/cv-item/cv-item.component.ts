import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv-item',
  templateUrl: './cv-item.component.html',
  styleUrls: ['./cv-item.component.css']
})
export class CvItemComponent {
  @Input({required: true})
  cv!: Cv;
  @Input() size = 50;

  cvService = inject(CvService);
  // @Output()
  // selectCv = new EventEmitter<Cv>();
  onSelectCv() {
    this.cvService.selectCv(this.cv);
    // this.selectCv.emit(this.cv);
  }
}
