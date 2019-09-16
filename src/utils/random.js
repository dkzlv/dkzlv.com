export const randInterval = (from, to) => Math.floor(Math.random() * to + from)

export const sample = data => data[randInterval(0, data.length)]

import range from './range'

const chars = 'abcdefghijklmnopqrstuvwxyz'
export const generateString = length =>
  range(length)
    .map(() => chars.charAt(Math.floor(Math.random() * chars.length)))
    .join('')

export const randomBool = (chance = 50) => Math.random() < chance / 100
