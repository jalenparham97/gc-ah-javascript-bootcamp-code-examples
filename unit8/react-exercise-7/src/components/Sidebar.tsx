import { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import { formatCurrency } from '../utils/formatCurrency';

export default function Sidebar() {
  const { orders } = useContext(OrderContext);

  const total = orders.reduce((prevPrice, currentItem) => {
    return prevPrice + currentItem.price;
  }, 0);

  return (
    <div style={{ padding: '10px 20px', backgroundColor: '#e7e7e7' }}>
      <ol>
        {orders.map((item) => (
          <li>
            {item.name} - {formatCurrency(item.price)}
          </li>
        ))}
      </ol>
      <p style={{ textAlign: 'center' }}>Total: {formatCurrency(total)}</p>
    </div>
  );
}
