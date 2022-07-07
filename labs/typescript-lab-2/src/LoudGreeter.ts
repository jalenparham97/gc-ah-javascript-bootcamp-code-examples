import { Greeter } from './Greeter';

export class LoudGreeter extends Greeter {
  private extra: string = '!';

  addVolume(): void {
    this.extra += '!';
  }

  greet(name: string) {
    // return super.greet(name) + this.extra;
    return `${super.greet(name)}${this.extra}`;
  }
}
