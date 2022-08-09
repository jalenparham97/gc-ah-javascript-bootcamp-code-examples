import { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';

export default function Header() {
  const { orders } = useContext(OrderContext);

  return (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#c2a9ff',
      }}
    >
      <h1>Sunny Side Up</h1>
      <p>Order Count: {orders.length}</p>
    </div>
  );
}
