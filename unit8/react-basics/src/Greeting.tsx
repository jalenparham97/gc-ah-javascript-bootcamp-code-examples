import { useState } from 'react';
import './Greeting.css';
import { Greeting as TGreeting } from './types';

// Interfaces for the component should grenerally have the word Props in it.
interface GreetingProps {
  greeting: TGreeting;
  showAlternateMessage?: boolean;
}

// We use object destructuring to consume props passed to our component.
function Greeting({ greeting, showAlternateMessage }: GreetingProps) {
  // function Greeting(props: Props) {
  const [anotherMessage] = useState('Another message');
  const someMsg = 'Some message';

  return (
    <h1
      style={{ backgroundColor: 'red', color: 'white' }}
      className="greeting-title"
    >
      {/* {props.message} {props.name || 'Jalen'} */}
      {/* {message} {name || 'Jalen'} */}
      {greeting.message} {greeting.name || 'Jalen'}
    </h1>
  );
}

export default Greeting;
