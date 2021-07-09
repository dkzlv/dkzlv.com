import { range } from './range';

const chars = 'abcdefghijklmnopqrstuvwxyz';
export const generateString = (length: number) =>
    range(length)
      .map(() => chars.charAt(Math.floor(Math.random() * chars.length)))
      .join(''),
  randomBool = (chance = 50) => Math.random() < chance / 100,
  randInterval = (from: number, to: number) => Math.floor(Math.random() * to + from),
  sample = <T>(data: T[]) => data[randInterval(0, data.length)]!;
