import chalk, { Color, ForegroundColor } from 'chalk';
import { Greeter } from './Greeter';

type ChalkColor = typeof Color;

export class ChalkGreeter extends Greeter {
  color: ChalkColor;

  constructor(greeting: string, color: ChalkColor = 'cyan') {
    super(greeting);
    this.color = color;
  }

  greet(name: string): string {
    // return chalk[this.color](super.greet(name));
    return chalk[this.color](super.greet(name));
  }
}

const me = {
  name: 'Jalen',
  workPlace: 'Nexient',
};

const prop = 'workPlace';

const result = me[prop];
