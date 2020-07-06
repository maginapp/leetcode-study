import { openLock } from './open-lock'

const testUnit = [
  [['0201', '0101', '0102', '1212', '2002'], '0202', 6],
  [['8888'], '0009', 1],
  [['8887', '8889', '8878', '8898', '8788', '8988', '7888', '9888'], '8888', -1],
  [['0000'], '8888', -1]
]

describe('test-openLock', () => {
  for (let i = 0; i < testUnit.length; i++) {
    it('success', () => {
      expect(openLock(testUnit[i][0], testUnit[i][1])).toBe(testUnit[i][2])
    })
  }
})
