import { LoudGreeter } from '../src/LoudGreeter';

describe('LoudGreeter', () => {
  test('Adds the default exclamation point', () => {
    const greeter = new LoudGreeter('Hi');

    const greeting = greeter.greet('Jalen');

    expect(greeting).toBe('Hi, Jalen!!');
  });

  test('Adds one exclamation point', () => {
    const greeter = new LoudGreeter('Hi');

    greeter.addVolume();

    const greeting = greeter.greet('Jalen');

    expect(greeting).toBe('Hi, Jalen!!!');
  });

  test('Adds two exclamation point', () => {
    const greeter = new LoudGreeter('Hi');

    greeter.addVolume();
    greeter.addVolume();

    const greeting = greeter.greet('Jalen');

    expect(greeting).toBe('Hi, Jalen!!!!');
  });
});
