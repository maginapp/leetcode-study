import { updateMatrix } from './05-542-01-matrix'

/* eslint-disable */
const example = [
  [[[[0,0,0],[0,1,0],[0,0,0]]], [[0,0,0],[0,1,0],[0,0,0]]],
  [[[[0,0,0],[0,1,0],[1,1,1]]], [[0,0,0],[0,1,0],[1,2,1]]],
  [[[[0]]], [[0]]]
]
/* eslint-enable */
describe('05-542-01-matrix test', () => {
  it('expect-updateMatrix', () => {
    example.forEach(item => {
      expect(updateMatrix(...item[0])).toEqual(item[1])
    })
  })
})
