import { useState } from 'react';
import { Item } from '../types';
import { OrderContext } from './OrderContext';

interface Props {
  children: React.ReactNode;
}

export function OrderContextProvider({ children }: Props) {
  const [orders, setOrders] = useState<Item[]>([]);

  const addItem = (item: Item) => {
    setOrders([...orders, item]);
  };

  const removeItem = (id: string) => {
    const index = orders.findIndex((item) => item.id === id);
    const updatedOrders = [...orders]; // Copy of orders state array
    updatedOrders.splice(index, 1);
    setOrders(updatedOrders);
  };

  return (
    <OrderContext.Provider value={{ orders, addItem, removeItem }}>
      {children}
    </OrderContext.Provider>
  );
}
