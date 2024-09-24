import { inject, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class SayHelloService {
  logger = inject(LoggerService);
  constructor() { }
  sayHello() {
    this.logger.loger('Hello');
  }
}
