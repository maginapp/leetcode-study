import { LRUCache } from './142-lru'

/* eslint-disable */
const example = [
  [
    ["LRUCache","put","put","get","put","get","put","get","get","get"],
    [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]],
    [null,null,null,1,null,-1,null,-1,3,4]
  ],
  [
    ["LRUCache","put","get","put","get","get"],
    [[1],[2,1],[2],[3,2],[2],[3]],
    [null,null,1,null,-1,2]
  ],
  [
    ["LRUCache","put","put","get","put","put","get"],
    [[2],[2,1],[2,2],[2],[1,1],[4,1],[2]],
    [null,null,null,2,null,null,-1]
  ],
  [
    ["LRUCache","put","put","get","get","put","get","get","get"],
    [[2],[2,1],[3,2],[3],[2],[4,3],[2],[3],[4]],
    [null,null,null,2,1,null,1,-1,3]
  ],
  [
    ["LRUCache","put","put","put","put","get","get","get","get","put","get","get","get","get","get"],
    [[3],[1,1],[2,2],[3,3],[4,4],[4],[3],[2],[1],[5,5],[1],[2],[3],[4],[5]],
    [null,null,null,null,null,4,3,2,-1,null,-1,2,3,-1,5]
    
  ]
]
/* eslint-enable */

describe('142-lru.test', () => {
  example.forEach(item => {
    it('LRUCache ==>' + item[2], () => {
      // var lruFn = new Function('return new ' + item[0][0] + '(' + item[1][0] + ')')
      // var lru = lruFn()
      var lru = new LRUCache(...item[1][0])
      var ans = [null]
      for (let i = 1; i < item[0].length; i++) {
        let result = lru[item[0][i]](...item[1][i])
        ans.push(result)
      }
      expect(ans).toEqual(item[2])
    })
  })
  it('expect(ans).toEqual(item[2])', () => {
    expect(123).toEqual(1234, 'test')
  })
})
