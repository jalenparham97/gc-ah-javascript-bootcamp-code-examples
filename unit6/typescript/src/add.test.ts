import { add } from './add';

describe('add.ts', () => {
  it('Adds 2 + 2', () => {
    expect(add(2, 2)).toBe(4);
  });
});
