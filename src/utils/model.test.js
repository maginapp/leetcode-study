import { myFunc } from './model'

/* eslint-disable */
const example = [
  [[], '']
]
/* eslint-enable */
describe('model test', () => {
  it('expect-myFunc', () => {
    example.forEach(item => {
      expect(myFunc(...item[0])).toEqual(item[1])
    })
  })
})
