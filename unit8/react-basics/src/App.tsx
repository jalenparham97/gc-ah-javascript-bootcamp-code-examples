import { useState, Fragment } from 'react';
import Greeting from './Greeting';
import './App.css';

// function Greeting() {
//   return <h1>Hello Class! We are learning React.</h1>;
// }

function App() {
  const [count, setCount] = useState(0);
  const [stringArray, setStringArray] = useState<string[]>([]);
  const [isOnline, setIsOnline] = useState(true);
  const [fullName, setFullName] = useState('Jalen');
  const [link, setLink] = useState('https://thelovechronicles.org');

  // If you need to update the same state multiple times in the same function then use the callBack function in the updater function for saftey.
  // Otherwise if you only have to update it once then you dont need to.
  const incrementCount = () => {
    setCount(count + 1);
    // setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);

    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  let addClass = '';
  if (count <= 5) {
    addClass = 'alert';
  }

  // In the {} we can render our state variables and write javascript/typescript expressions.
  return (
    <>
      <Greeting />
      <div style={{ marginLeft: 100, marginTop: 20, display: 'flex', gap: 10 }}>
        <button onClick={decrementCount}>decrement</button>
        {/* <button onClick={(event) => setCount(count - 1)}>decrement</button> */}
        <div className={`${addClass}`}>{count}</div>
        <button onClick={incrementCount}>increment</button>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={isOnline ? 'online' : 'offline'}
        >
          Some link to somewhere
        </a>
        {isOnline && fullName === 'Jalen' && <p>Online</p>}
        {/* {isOnline && <p>Online</p>}
        {!isOnline && <p>Not online</p>} */}
        {/* {isOnline ? <p>Online</p> : <p>Not Online</p>} */}
        {/* <button onClick={() => setCount(count + 1)}>increment</button> */}
      </div>
    </>
    // <div className="App">
    //   <Greeting />
    //   <div style={{ marginLeft: 100, marginTop: 20, display: 'flex', gap: 10 }}>
    //     <button onClick={decrementCount}>decrement</button>
    //     {/* <button onClick={(event) => setCount(count - 1)}>decrement</button> */}
    //     <div className={`${addClass}`}>{count}</div>
    //     <button onClick={incrementCount}>increment</button>
    //     <a
    //       href={link}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className={isOnline ? 'online' : 'offline'}
    //     >
    //       Some link to somewhere
    //     </a>
    //     {isOnline && fullName === 'Jalen' && <p>Online</p>}
    //     {/* {isOnline && <p>Online</p>}
    //     {!isOnline && <p>Not online</p>} */}
    //     {/* {isOnline ? <p>Online</p> : <p>Not Online</p>} */}
    //     {/* <button onClick={() => setCount(count + 1)}>increment</button> */}
    //   </div>
    // </div>
  );
}

export default App;
