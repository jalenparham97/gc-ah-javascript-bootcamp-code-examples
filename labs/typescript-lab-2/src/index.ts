import { prompt } from 'promptly';
import { ChalkGreeter } from './ChalkGreeter';
import { Greeter } from './Greeter';
import { HtmlGreeter } from './HtmlGreeter';
import { JavascriptGreeter } from './JavascriptGreeter';
import { LoudGreeter } from './LoudGreeter';

async function printGreeting() {
  const greeting = 'Hi';

  // Prompt the user for thier name.
  const name = await prompt('Name: ', { default: 'Jalen' });

  // Set up our greeter classes.
  const greeter = new Greeter(greeting);
  const javascriptGreeter = new JavascriptGreeter(greeting);
  const loudGreeter = new LoudGreeter(greeting);
  const htmlGreeter = new HtmlGreeter(greeting);
  const chalkGreeter = new ChalkGreeter(greeting, 'green');

  // Log the greetings.
  console.log(greeter.greet(name));
  console.log(javascriptGreeter.greet(name));
  console.log(loudGreeter.greet(name));
  console.log(htmlGreeter.greet(name));
  console.log(chalkGreeter.greet(name));
}

printGreeting();
