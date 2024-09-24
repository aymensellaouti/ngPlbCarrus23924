export class LoggerService {
  loger(message: unknown): void {
    console.log('From Logger service');
    console.log(message);
  }
}
