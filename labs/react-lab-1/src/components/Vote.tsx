import { useState } from 'react';
import './Vote.css';

export default function Vote() {
  const [chocolateVotes, setChocolateVotes] = useState(0);
  const [vanillaVotes, setVanillaVotes] = useState(0);
  const [strawberryVotes, setStrawberryVotes] = useState(0);

  const hasNoVotes =
    chocolateVotes === 0 && vanillaVotes === 0 && strawberryVotes === 0;

  const hasChocolateVotes = chocolateVotes !== 0;
  const hasVanillaVotes = vanillaVotes !== 0;
  const hasStrawberryVotes = strawberryVotes !== 0;

  const totalVotes = chocolateVotes + vanillaVotes + strawberryVotes;

  const chocolatePercent = ((chocolateVotes / totalVotes) * 100).toFixed(1);
  const vanillaPercent = ((vanillaVotes / totalVotes) * 100).toFixed(1);
  const strawberryPercent = ((strawberryVotes / totalVotes) * 100).toFixed(1);

  return (
    <div>
      <h1 className="title">Vote Here</h1>

      <div className="section">
        <div className="btn-container">
          <button
            className="btn"
            onClick={() => setChocolateVotes(chocolateVotes + 1)}
          >
            Chocolate
          </button>
          <button
            className="btn"
            onClick={() => setVanillaVotes(vanillaVotes + 1)}
          >
            Vanilla
          </button>
          <button
            className="btn"
            onClick={() => setStrawberryVotes(strawberryVotes + 1)}
          >
            Strawberry
          </button>
        </div>
      </div>

      <div className="votes">
        {hasNoVotes && <h3>No votes yet</h3>}

        {!hasNoVotes && (
          <>
            {hasChocolateVotes && (
              <div className="vote-container">
                <p>
                  <span>Chocolate</span>: {chocolateVotes} ({chocolatePercent}%)
                </p>
                <div
                  className="percent-width"
                  style={{
                    width: `${chocolatePercent}%`,
                    backgroundColor: '#4f2c2c',
                  }}
                ></div>
              </div>
            )}

            {hasVanillaVotes && (
              <div className="vote-container">
                <p>
                  <span>Vanilla</span>: {vanillaVotes} ({vanillaPercent}%)
                </p>
                <div
                  className="percent-width"
                  style={{
                    width: `${vanillaPercent}%`,
                    backgroundColor: '#cbc0ac',
                  }}
                ></div>
              </div>
            )}

            {hasStrawberryVotes && (
              <div className="vote-container">
                <p>
                  <span>Strawberry</span>: {strawberryVotes} (
                  {strawberryPercent}
                  %)
                </p>
                <div
                  className="percent-width"
                  style={{
                    width: `${strawberryPercent}%`,
                    backgroundColor: '#de8c91',
                  }}
                ></div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
