import { createContext } from 'react';
import { Item } from '../types';

interface OrderContextModal {
  orders: Item[];
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
}

export const OrderContext = createContext<OrderContextModal>({
  orders: [],
  addItem: () => {},
  removeItem: () => {},
});
