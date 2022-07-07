import { HtmlGreeter } from '../src/HtmlGreeter';

describe('Greeter', () => {
  test('Handles greeting of Hi and name of Jalen with default h1', () => {
    const greeter = new HtmlGreeter('Hi');

    const greeting = greeter.greet('Jalen');

    expect(greeting).toBe('<h1>Hi, Jalen!</h1>');
  });

  test('Handles greeting of Nice to meet you and name of Sally with div', () => {
    const greeter = new HtmlGreeter('Nice to meet you', 'div');

    const greeting = greeter.greet('Sally');

    expect(greeting).toBe('<div>Nice to meet you, Sally!</div>');
  });
});
