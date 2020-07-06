import { hi, add } from './hi'

it('hi.js hi', () => {
  expect(add(1, 2)).toBe(3)
  expect([1, 2]).toEqual([1, 2])
})
