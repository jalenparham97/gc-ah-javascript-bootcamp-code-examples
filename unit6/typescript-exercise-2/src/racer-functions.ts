import { Racer } from './racer';

export function findRacersWithEmptyFuel(racers: Racer[]) {
  return racers.filter((racer) => racer.isFuelEmpty());
}

export function findAverageSpeed(racers: Racer[]) {
  if (!racers.length) return 0;
  let totalSpeeds = 0;
  racers.forEach((racer) => (totalSpeeds += racer.speed));
  return totalSpeeds / racers.length;
}

export function getFasterRacer(racerA: Racer, racerB: Racer) {
  if (racerA.speed === racerB.speed) return null;
  return racerA.speed > racerB.speed ? racerA : racerB;
}
