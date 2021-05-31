import { trap, trap2, trap3 } from './42-trapping-rain-water'

const list = [
  [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], 6],
  [[4, 2, 0, 3, 2, 5], 9],
  [[4, 2, 3], 1],
  [[0, 2, 0], 0]
]

describe('42-trapping-rain-water trap', () => {
  for (let i = 0; i < list.length; i++) {
    it('item ==> ' + (i + 1), () => {
      expect(trap(list[i][0])).toBe(list[i][1])
    })
  }
})

describe('42-trapping-rain-water trap2', () => {
  for (let i = 0; i < list.length; i++) {
    it('item ==> ' + (i + 1), () => {
      expect(trap2(list[i][0])).toBe(list[i][1])
    })
  }
})

describe('42-trapping-rain-water trap3', () => {
  for (let i = 0; i < list.length; i++) {
    it('item ==> ' + (i + 1), () => {
      expect(trap3(list[i][0])).toBe(list[i][1])
    })
  }
})

describe('trap3 all', () => {
  ;[trap, trap2, trap3].forEach((fn, index) => {
    it('item ==> ' + (index + 1), () => {
      for (let j = 0; j < 10000; j++) {
        for (let i = 0; i < list.length; i++) {
          fn(list[i][0])
        }
      }
      expect(1).toBe(1)
    })
  })
})
