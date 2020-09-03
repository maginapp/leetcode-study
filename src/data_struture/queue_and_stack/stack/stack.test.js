import { MinStack } from './stack'
/* eslint-disable */ 
/* eslint-enable */
const example = [
  [
    ['MinStack', 'push', 'push', 'push', 'getMin', 'pop', 'top', 'getMin'],
    [[], [-2], [0], [-3], [], [], [], []],
    [null, null, null, null, -3, null, 0, -2]
  ]
]
/* eslint-enable */

describe('stack-test', () => {
  example.forEach(item => {
    it('MinStack' + item, () => {
      const stack = new MinStack()
      for (let i = 1; i < item[0].length; i++) {
        expect(stack[item[0][i]](...item[1][i])).toBe(item[2][i])
      }
    })
  })
})
