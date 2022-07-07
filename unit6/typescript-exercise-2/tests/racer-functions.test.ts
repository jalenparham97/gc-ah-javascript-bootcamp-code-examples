import { GasCar } from '../src/gas-car';
import { SolarCar } from '../src/solar-car';
import { Racer } from '../src/racer';
import {
  findRacersWithEmptyFuel,
  findAverageSpeed,
  getFasterRacer,
} from '../src/racer-functions';

describe('findRacersWithEmptyFuel', () => {
  test('GasCar where some have no fuel', () => {
    const racers: Racer[] = [
      new GasCar('Car 1', 0),
      new GasCar('Car 2'),
      new GasCar('Car 3', 0),
      new GasCar('Car 4'),
    ];

    const noFuelRacers = findRacersWithEmptyFuel(racers);

    expect(noFuelRacers).toStrictEqual([
      new GasCar('Car 1', 0),
      new GasCar('Car 3', 0),
    ]);
  });

  test('GasCar where all have no fuel', () => {
    const racers: Racer[] = [
      new GasCar('Car 1', 0),
      new GasCar('Car 2', 0),
      new GasCar('Car 3', 0),
      new GasCar('Car 4', 0),
    ];

    const noFuelRacers = findRacersWithEmptyFuel(racers);

    expect(noFuelRacers).toStrictEqual(racers);
  });
});

describe('findAverageSpeed', () => {
  test('Finds the average with the GasCar class', () => {
    const car1 = new GasCar('Car 1');
    const car2 = new GasCar('Car 2');

    car1.speed = 20;
    car2.speed = 10;

    const racers = [car1, car2];

    const averageSpeed = findAverageSpeed(racers);

    expect(averageSpeed).toBe(15);
  });

  test('Finds the average with the GasCar class and the SolarCar class', () => {
    const car1 = new GasCar('Car 1');
    const car2 = new SolarCar('Car 2');

    car1.speed = 20;
    car2.speed = 10;

    const racers = [car1, car2];

    const averageSpeed = findAverageSpeed(racers);

    expect(averageSpeed).toBe(15);
  });

  test('Returns average of 0 when racers have a speed of 0', () => {
    const car1 = new GasCar('Car 1');
    const car2 = new SolarCar('Car 2');

    const racers = [car1, car2];

    const averageSpeed = findAverageSpeed(racers);

    expect(averageSpeed).toBe(0);
  });

  test('Returns 0 when passed an empty array', () => {
    const racers: Racer[] = [];

    const averageSpeed = findAverageSpeed(racers);

    expect(averageSpeed).toBe(0);
  });
});

describe('getFasterRacer', () => {
  test('Return racerA as faster racer', () => {
    const racerA = new GasCar('Racer A');
    const racerB = new GasCar('Racer B');

    racerA.speed = 40;
    racerB.speed = 20;

    const fasterRacer = getFasterRacer(racerA, racerB);

    expect(fasterRacer).toStrictEqual(racerA);
  });

  test('Return racerB as faster racer', () => {
    const racerA = new GasCar('Racer A');
    const racerB = new GasCar('Racer B');

    racerA.speed = 20;
    racerB.speed = 40;

    const fasterRacer = getFasterRacer(racerA, racerB);

    expect(fasterRacer).toStrictEqual(racerB);
  });

  test('Return racerB as faster racer', () => {
    const racerA = new GasCar('Racer A');
    const racerB = new GasCar('Racer B');

    racerA.speed = 20;
    racerB.speed = 40;

    const fasterRacer = getFasterRacer(racerA, racerB);

    expect(fasterRacer).toStrictEqual(racerB);
  });

  test('Return racerB as faster racer', () => {
    const racerA = new GasCar('Racer A');
    const racerB = new GasCar('Racer B');

    racerA.speed = 20;
    racerB.speed = 40;

    const fasterRacer = getFasterRacer(racerA, racerB);

    expect(fasterRacer).toStrictEqual(racerB);
  });

  test('Return null as both racers are equal', () => {
    const racerA = new GasCar('Racer A');
    const racerB = new GasCar('Racer B');

    racerA.speed = 20;
    racerB.speed = 20;

    const fasterRacer = getFasterRacer(racerA, racerB);

    expect(fasterRacer).toBeNull();
  });

  test('Return racerB as faster racer', () => {
    const racerA = new GasCar('Racer A');
    const racerB = new SolarCar('Racer B');

    racerA.speed = 20;
    racerB.speed = 40;

    const fasterRacer = getFasterRacer(racerA, racerB);

    expect(fasterRacer).toStrictEqual(racerB);
  });
});
