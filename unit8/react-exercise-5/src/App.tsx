import { useState } from 'react';
import './App.css';

interface Pet {
  id: number;
  name: string;
  type: string;
}

const colorsData = ['red', 'green', 'blue'];

const petsData: Pet[] = [
  { id: 1, name: 'Pablo', type: 'dog' },
  { id: 2, name: 'Arthur', type: 'Aardvark' },
  { id: 3, name: 'Kermit', type: 'frog' },
];

function App() {
  const [colors, setColors] = useState(colorsData);
  const [pets, setPets] = useState(petsData);

  function handleAddColor(e: React.MouseEvent<HTMLButtonElement>) {
    setColors([...colors, e.currentTarget.name]);
  }

  function handleAddColorV2(color: string) {
    setColors([...colors, color]);
  }

  function handleDeletePet(index: number) {
    const petsCopy = [...pets];
    petsCopy.splice(index, 1);
    setPets([...petsCopy]);
  }

  function generateId() {
    return Math.floor(Math.random() * Date.now());
  }

  return (
    <div className="App">
      <h1>Arrays Exercise</h1>
      <div>
        <h2>Colors</h2>
        <ol>
          {colors.map((color) => (
            <li key={generateId()}>{color}</li>
          ))}
        </ol>
        <button name="pink" onClick={() => handleAddColorV2('pink')}>
          Add pink
        </button>
        {/* <button name="pink" onClick={handleAddColor}>
          Add pink
        </button> */}
        <button name="purple" onClick={handleAddColor}>
          Add purple
        </button>
        <button name="orange" onClick={handleAddColor}>
          Add orange
        </button>
      </div>

      <div>
        <h2>Pets</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pets.map((pet, index) => (
              <tr key={pet.id}>
                <td>{pet.name}</td>
                <td>{pet.type}</td>
                <td>
                  <button onClick={() => handleDeletePet(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
