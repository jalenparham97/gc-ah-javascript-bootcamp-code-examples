import { JavascriptGreeter } from '../src/JavascriptGreeter';

describe('JavascriptGreeter', () => {
  test('Handles greeting of Hi and name of Jalen', () => {
    const greeter = new JavascriptGreeter('Hi');

    const greeting = greeter.greet('Jalen');

    expect(greeting).toBe('console.log("Hi, Jalen!");');
  });

  test('Handles greeting of Nice to meet you and name of Sally', () => {
    const greeter = new JavascriptGreeter('Nice to meet you');

    const greeting = greeter.greet('Sally');

    expect(greeting).toBe('console.log("Nice to meet you, Sally!");');
  });
});
