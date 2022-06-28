export interface Product {
  name: string;
  price: number;
}

const products: Product[] = [
  { name: 'Ball', price: 2 },
  { name: 'Pie', price: 5 },
  { name: 'Doll', price: 2 },
];

export function calcAverageProductPrice(productsArray: Product[]): number {
  if (!productsArray.length) return 0;

  let total = 0;
  productsArray.forEach((product) => (total += product.price));

  return total / productsArray.length;
}

const average = calcAverageProductPrice(products);
console.log(average);
