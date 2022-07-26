import { useState, Fragment } from 'react';
import { faker } from '@faker-js/faker';
import Greeting from './Greeting';
import './App.css';
import { Greeting as TGreeting } from './types';

// function Greeting() {
//   return <h1>Hello Class! We are learning React.</h1>;
// }

function App() {
  const [count, setCount] = useState(0);
  const [stringArray, setStringArray] = useState<string[]>([]);
  const [isOnline, setIsOnline] = useState(true);
  const [fullName, setFullName] = useState('Jalen');
  const [link, setLink] = useState('https://thelovechronicles.org');

  const [luckyWinner, setLuckyWinner] = useState({
    name: 'Auriel',
    occupation: 'Federal Employee - Tired Mom (GREAT) Mom by night!',
  });

  const [vipUsers, setVipUsers] = useState([
    {
      name: 'Jalen',
      occupation: 'Coder by day - Teacher by night',
    },
    { name: 'Ren', occupation: 'Video Gamer - HR professional' },
    {
      name: 'KJ',
      occupation: 'Dog Therapist - And sometimes a people one by proxy',
    },
    { name: 'Ken', occupation: 'Farmer by day - Coder by night on the farm' },
    {
      name: 'Briana',
      occupation:
        'Graphic Designer - Graphicaly Designing and developing websites - (In the near future professionaly)',
    },
  ]);

  const addVipUser = () => {
    const newVipUser = {
      name: faker.name.findName(),
      occupation: faker.name.jobTitle(),
    };
    // setVipUsers((prevVipUsers) => [...prevVipUsers, newVipUser]);
    setVipUsers([...vipUsers, newVipUser]);
  };

  const updateLuckyWinner = (property?: 'name' | 'occupation') => {
    let updatedLuckyWinner;

    if (property) {
      if (property === 'name') {
        updatedLuckyWinner = {
          name: faker.name.findName(),
        };
        return setLuckyWinner({ ...luckyWinner, ...updatedLuckyWinner });
      }

      if (property === 'occupation') {
        updatedLuckyWinner = {
          occupation: faker.name.jobTitle(),
        };
        return setLuckyWinner({ ...luckyWinner, ...updatedLuckyWinner });
      }
    }

    updatedLuckyWinner = {
      name: faker.name.findName(),
      occupation: faker.name.jobTitle(),
    };
    return setLuckyWinner(updatedLuckyWinner);
  };

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

  const greeting: TGreeting = {
    message: 'Some message',
    name: 'Jalen',
  };

  const votes = 2;

  // In the {} we can render our state variables and write javascript/typescript expressions.
  return (
    <>
      {/* <Greeting message={greeting.message} name={greeting.name} /> */}
      <Greeting greeting={greeting} showAlternateMessage={true} />

      <div style={{ marginLeft: 100, marginTop: 20, gap: 10 }}>
        <button style={{ marginRight: '10px' }} onClick={addVipUser}>
          Add vip user
        </button>
        <button onClick={() => updateLuckyWinner('occupation')}>
          Update lucky winner
        </button>

        <div style={{ marginTop: '20px' }}>
          <h3>Lucky winner</h3>
          <p>
            {luckyWinner.name} - {luckyWinner.occupation}
          </p>
        </div>

        <div>
          <h3>Vip users</h3>
          <ul>
            {/* Rendering an array in the JSX */}
            {vipUsers.map((vipUser) => (
              <li key={vipUser.name}>
                {vipUser.name} - {vipUser.occupation}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        style={{ marginLeft: 100, marginTop: 100, display: 'flex', gap: 10 }}
      >
        <div>
          <div>
            {vipUsers.map((vipUser) => (
              <div key={vipUser.name}>
                <div>
                  <h3>{vipUser.name}</h3>
                  <p>{vipUser.occupation}</p>s
                </div>
              </div>
            ))}
          </div>
          <ul>
            {/* Rendering an array in the JSX */}
            {vipUsers.map((vipUser) => (
              <li key={vipUser.name}>
                {vipUser.name} - {vipUser.occupation}
              </li>
            ))}
          </ul>
        </div>

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
        {/* {isOnline && fullName === 'Jalen' && <p>Online</p>} */}
        {votes > 0 && (
          <div>
            <p>I have votes</p>
          </div>
        )}
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
