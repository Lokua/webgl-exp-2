import randomInt from 'random-int'

export function randomBool() {
  return !!randomInt(1)
}

export function randomSign() {
  return randomBool() ? -1 : 1
}

export function randomOffset(offset) {
  return randomInt(0, offset) * randomSign()
}
