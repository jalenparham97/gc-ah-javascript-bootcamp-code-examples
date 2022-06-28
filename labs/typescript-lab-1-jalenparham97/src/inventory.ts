import { Product } from './products';

export interface InventoryItem {
  product: Product; // This property is an object
  quantity: number;
}

// Access multiple levels deep of an object.
// const object = {
//   product: {
//     name: 'motor',
//     price: {
//       value: 10,
//       someotherObject: {
//         name: 'yay',
//       },
//     },
//   },
//   quantity: 10,
// };

// object.product.price.someotherObject.name;

const inventory: InventoryItem[] = [
  {
    product: {
      name: 'motor',
      price: 10.0,
    },
    quantity: 10,
  },
  { product: { name: 'sensor', price: 12.5 }, quantity: 4 },
  { product: { name: 'LED', price: 1.0 }, quantity: 20 },
];

export function calcInventoryValue(inventoryArray: InventoryItem[]) {
  if (!inventoryArray.length) return 0;

  let total = 0;
  inventoryArray.forEach(
    (item) => (total += item.product.price * item.quantity)
  );

  return total;
}

const addedTotal = calcInventoryValue(inventory);
console.log(addedTotal);
