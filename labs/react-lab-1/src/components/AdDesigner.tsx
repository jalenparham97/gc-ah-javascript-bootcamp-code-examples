import { useState } from 'react';
import { Ad, Flavor } from './Ad';
import './AdDesigner.css';

export default function AdDesigner() {
  const [flavor, setFlavor] = useState<Flavor>('Chocolate');
  const [colorTheme, setColorTheme] = useState(true);
  const [fontSize, setFontSize] = useState(50);

  const handleSetChocolateFlavor = () => {
    setFlavor('Chocolate');
  };

  return (
    <div>
      <h1 className="title">Ad Designer</h1>

      <Ad colorTheme={colorTheme} fontSize={fontSize} flavor={flavor} />

      {/* <div className={`ad ${!colorTheme && 'ad-dark'}`}>
        <h3>Vote For</h3>
        <h1 className="flavor" style={{ fontSize }}>
          {flavor}
        </h1>
      </div> */}

      <div className="section">
        <h3>What to vote for</h3>

        <div className="btn-container">
          <button
            className="btn"
            onClick={() => setFlavor('Chocolate')}
            // onClick={handleSetChocolateFlavor}
            disabled={flavor === 'Chocolate'}
          >
            Chocolate
          </button>
          <button
            className="btn"
            onClick={() => setFlavor('Vanilla')}
            disabled={flavor === 'Vanilla'}
          >
            Vanilla
          </button>
          <button
            className="btn"
            onClick={() => setFlavor('Strawberry')}
            disabled={flavor === 'Strawberry'}
          >
            Strawberry
          </button>
        </div>
      </div>

      <div className="section">
        <h3>Color Theme</h3>

        <div className="btn-container">
          <button
            className="btn"
            onClick={() => setColorTheme(true)}
            disabled={colorTheme}
          >
            Light
          </button>
          <button
            className="btn"
            onClick={() => setColorTheme(false)}
            disabled={!colorTheme}
          >
            Dark
          </button>
        </div>
      </div>

      <div className="section">
        <h3>Font Size</h3>

        <div className="btn-container">
          <button className="btn" onClick={() => setFontSize(fontSize - 1)}>
            Down
          </button>
          <p>{fontSize}</p>
          <button className="btn" onClick={() => setFontSize(fontSize + 1)}>
            Up
          </button>
        </div>
      </div>
    </div>
  );
}
