export class Player {
  name: string = 'Matt';
  jerseyNumber: number;

  // Constructor sets the initial values for our classes properties.
  constructor(name: string, jerseyNumber: number) {
    this.name = name;
    this.jerseyNumber = jerseyNumber;
  }

  // Methods
  getName(): string {
    return this.name;
  }
}

export class Car {
  speed: number;

  constructor(speed: number) {
    this.speed = speed;
  }

  accelerate(acceleration: number = 1) {
    this.speed += acceleration;
  }
}
