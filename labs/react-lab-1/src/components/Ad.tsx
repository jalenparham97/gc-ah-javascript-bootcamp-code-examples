import './Ad.css';

export type Flavor = 'Chocolate' | 'Vanilla' | 'Strawberry';

interface AdProps {
  colorTheme: boolean;
  fontSize: number;
  flavor: Flavor;
}

export function Ad({ colorTheme, fontSize, flavor }: AdProps) {
  return (
    <div className={`ad ${!colorTheme && 'ad-dark'}`}>
      <h3>Vote For</h3>
      <h1 className="flavor" style={{ fontSize }}>
        {flavor}
      </h1>
    </div>
  );
}
