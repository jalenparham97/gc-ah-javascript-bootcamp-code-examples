import { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import { Item } from '../types';
import { formatCurrency } from '../utils/formatCurrency';

interface Props {
  item: Item;
}

export default function MenuItem({ item }: Props) {
  const { addItem, removeItem, orders } = useContext(OrderContext);

  const hasOrderInCart = orders.includes(item);

  return (
    <li>
      <p>Name: {item.name}</p>
      <p>Description: {item.description}</p>
      <p>Calories: {item.calories}</p>
      <p>Price: {formatCurrency(item.price)}</p>
      <p>{item.vegetarian ? 'Vegetarian' : 'Not Vegetarian'}</p>
      <div>
        <button
          style={{
            padding: '10px 20px',
            cursor: 'pointer',
            border: '1px solid black',
            borderRadius: '3px',
          }}
          onClick={() => addItem(item)}
        >
          Add to order
        </button>
        {hasOrderInCart && (
          <button
            style={{
              padding: '10px 20px',
              cursor: 'pointer',
              backgroundColor: '#c2a9ff',
              border: '1px solid black',
              borderRadius: '3px',
              marginLeft: '10px',
            }}
            onClick={() => removeItem(item.id)}
          >
            Remove from order
          </button>
        )}
      </div>
    </li>
  );
}
