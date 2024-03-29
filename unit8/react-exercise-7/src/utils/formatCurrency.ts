export function formatCurrency(price: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}
