import { useState } from 'react';
import './Switch.css';

function Switch() {
  const [switchValue, setSwitchValue] = useState('OFF');

  const handleToggleSwitchOn = () => {
    setSwitchValue('ON');
  };

  const handleToggleSwitchOff = () => {
    setSwitchValue('OFF');
  };

  const handleToggleSwitch = () => {
    if (switchValue === 'ON') {
      setSwitchValue('OFF');
    } else {
      setSwitchValue('ON');
    }
  };

  return (
    <div className={`switch ${switchValue === 'ON' && 'switch-on'}`}>
      <h3>Switch</h3>
      <p>{switchValue}</p>
      {/* <div className="button-container">
        {switchValue === 'OFF' && (
          <button onClick={handleToggleSwitchOn}>Turn On</button>
        )}

        {switchValue === 'ON' && (
          <button onClick={handleToggleSwitchOff}>Turn Off</button>
        )}
      </div> */}

      {/* <div className="button-container">
        {switchValue === 'OFF' ? (
          <button onClick={handleToggleSwitchOn}>Turn On</button>
        ) : (
          <button onClick={handleToggleSwitchOff}>Turn Off</button>
        )}
      </div> */}

      <div className="button-container">
        <button onClick={handleToggleSwitch}>
          {switchValue === 'ON' ? 'Turn Off' : 'Turn On'}
        </button>
      </div>
    </div>
  );
}

export default Switch;
