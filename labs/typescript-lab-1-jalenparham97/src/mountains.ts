export interface Mountain {
  name: string;
  height: number;
}

const mountains: Mountain[] = [
  { name: 'Kilimanjaro', height: 19341 },
  { name: 'Everest', height: 29029 },
  { name: 'Denali', height: 20310 },
];

export function findNameOfTallestMountain(mountainsArray: Mountain[]): string {
  if (!mountains) return '';

  let tallestMountain = mountains[0];
  mountainsArray.forEach((mountain) => {
    if (mountain.height > tallestMountain.height) {
      tallestMountain = mountain;
    }
  });
  return tallestMountain.name;
}

const tallestMountainName = findNameOfTallestMountain(mountains);
console.log(tallestMountainName);
