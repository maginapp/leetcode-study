import wallsAndGates, { wallsAndGates2 } from './walls-and-gates'

describe('queue test', () => {
  it('expect-test1', () => {
    expect(
      wallsAndGates([
        ['INF', -1, 0, 'INF'],
        ['INF', 'INF', 'INF', -1],
        ['INF', -1, 'INF', -1],
        [0, -1, 'INF', 'INF']
      ])
    ).toEqual([
      [3, -1, 0, 1],
      [2, 2, 1, -1],
      [1, -1, 2, -1],
      [0, -1, 3, 4]
    ])
  })

  it('expect-test2', () => {
    expect(
      wallsAndGates([
        ['INF', -1, 0, 'INF'],
        ['INF', -1, 'INF', -1],
        ['INF', -1, 'INF', -1],
        [0, 'INF', 'INF', 'INF']
      ])
    ).toEqual([
      [3, -1, 0, 1],
      [2, -1, 1, -1],
      [1, -1, 2, -1],
      [0, 1, 2, 3]
    ])
  })

  it('expect-test1-2', () => {
    expect(
      wallsAndGates2([
        ['INF', -1, 0, 'INF'],
        ['INF', 'INF', 'INF', -1],
        ['INF', -1, 'INF', -1],
        [0, -1, 'INF', 'INF']
      ])
    ).toEqual([
      [3, -1, 0, 1],
      [2, 2, 1, -1],
      [1, -1, 2, -1],
      [0, -1, 3, 4]
    ])
  })

  it('expect-test2-2', () => {
    expect(
      wallsAndGates2([
        ['INF', -1, 0, 'INF'],
        ['INF', -1, 'INF', -1],
        ['INF', -1, 'INF', -1],
        [0, 'INF', 'INF', 'INF']
      ])
    ).toEqual([
      [3, -1, 0, 1],
      [2, -1, 1, -1],
      [1, -1, 2, -1],
      [0, 1, 2, 3]
    ])
  })
})
