import { Greeter } from '../src/Greeter';

describe('Greeter', () => {
  test('Handles greeting of Hi and name of Jalen', () => {
    const greeter = new Greeter('Hi');

    const greeting = greeter.greet('Jalen');

    expect(greeting).toBe('Hi, Jalen!');
  });

  test('Handles greeting of Nice to meet you and name of Sally', () => {
    const greeter = new Greeter('Nice to meet you');

    const greeting = greeter.greet('Sally');

    expect(greeting).toBe('Nice to meet you, Sally!');
  });
});
