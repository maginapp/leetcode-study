import { evalRPN, evalRPN_36_8 } from './150-evaluate-reverse-polish-notation'

const example = [
  [['2', '1', '+', '3', '*'], 9],
  [['4', '13', '5', '/', '+'], 6],
  [['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'], 22]
]

describe('evalRPN', () => {
  it('evalRPN-test', () => {
    example.forEach(item => {
      expect(evalRPN(item[0])).toBe(item[1])
    })
  })
  it('evalRPN_36_8-test', () => {
    example.forEach(item => {
      expect(evalRPN_36_8(item[0])).toBe(item[1])
    })
  })
})
