import { trap, trap2, trap3, trap4, trap5, trap6, trap7, trap8, trap9 } from './42-trapping-rain-water'

const list = [
  [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], 6],
  [[4, 2, 0, 3, 2, 5], 9],
  [[4, 2, 3], 1],
  [[0, 2, 0], 0]
]

// describe('42-trapping-rain-water trap', () => {
//   for (let i = 0; i < list.length; i++) {
//     it('item ==> ' + (i + 1), () => {
//       expect(trap(list[i][0])).toBe(list[i][1])
//     })
//   }
// })

// describe('42-trapping-rain-water trap2', () => {
//   for (let i = 0; i < list.length; i++) {
//     it('item ==> ' + (i + 1), () => {
//       expect(trap2(list[i][0])).toBe(list[i][1])
//     })
//   }
// })

// describe('42-trapping-rain-water trap3', () => {
//   for (let i = 0; i < list.length; i++) {
//     it('item ==> ' + (i + 1), () => {
//       expect(trap3(list[i][0])).toBe(list[i][1])
//     })
//   }
// })

// describe('42-trapping-rain-water trap4', () => {
//   for (let i = 0; i < list.length; i++) {
//     it('item ==> ' + (i + 1), () => {
//       expect(trap4(list[i][0])).toBe(list[i][1])
//     })
//   }
// })

// describe('42-trapping-rain-water trap5', () => {
//   for (let i = 0; i < list.length; i++) {
//     it('item ==> ' + (i + 1), () => {
//       expect(trap5(list[i][0])).toBe(list[i][1])
//     })
//   }
// })

// describe('42-trapping-rain-water trap6', () => {
//   for (let i = 0; i < list.length; i++) {
//     it('item ==> ' + (i + 1), () => {
//       expect(trap6(list[i][0])).toBe(list[i][1])
//     })
//   }
// })

// describe('trap3 all', () => {
//   ;[trap, trap2, trap3, trap4, trap5, trap6, trap7].forEach((fn, index) => {
//     it('item ==> ' + (index + 1), () => {
//       for (let j = 0; j < 50000; j++) {
//         for (let i = 0; i < list.length; i++) {
//           fn(list[i][0])
//         }
//       }
//       expect(1).toBe(1)
//     })
//   })
//   // √ item ==> 1 (59 ms) // 逐个遍历 o(2n)=>o(2n) o(n)
//   // √ item ==> 2 (374 ms) // 逐行 o(n) o(n)
//   // √ item ==> 3 (364 ms) // 单指针 o(n) o(n)
//   // √ item ==> 4 (224 ms) // 双指针 o(n) o(1)
//   // √ item ==> 5 (11 ms) // 逐个遍历 o(2n)=>o(n) o(1)
//   // √ item ==> 6 (50 ms) // 对比1内置了功能函数
//   // √ item ==> 7 (49 ms)

//   // √ item ==> 1 (62 ms)
//   // √ item ==> 2 (362 ms)
//   // √ item ==> 3 (349 ms)
//   // √ item ==> 4 (223 ms)
//   // √ item ==> 5 (10 ms)
//   // √ item ==> 6 (51 ms)
//   // √ item ==> 7 (56 ms)

//   // √ item ==> 1 (60 ms)
//   // √ item ==> 2 (361 ms)
//   // √ item ==> 3 (339 ms)
//   // √ item ==> 4 (219 ms)
//   // √ item ==> 5 (11 ms)
//   // √ item ==> 6 (50 ms)
//   // √ item ==> 7 (51 ms)
// })

// describe('42-trapping-rain-water trap8', () => {
//   for (let i = 0; i < list.length; i++) {
//     it('item ==> ' + (i + 1), () => {
//       expect(trap8(list[i][0])).toBe(list[i][1])
//     })
//   }
// })

// describe('trap-self all', () => {
//   ;[trap5, trap8].forEach((fn, index) => {
//     it('item ==> ' + (index + 1), () => {
//       for (let j = 0; j < 50000; j++) {
//         for (let i = 0; i < list.length; i++) {
//           fn(list[i][0])
//         }
//       }
//       expect(1).toBe(1)
//     })
//   })
//   // √ item ==> 1 (15 ms)
//   // √ item ==> 2 (71 ms)
// })

// describe('42-trapping-rain-water trap9', () => {
//   for (let i = 0; i < list.length; i++) {
//     it('item ==> ' + (i + 1), () => {
//       expect(trap9(list[i][0])).toBe(list[i][1])
//     })
//   }
// })

describe('trap5-trap9 fun in out', () => {
  ;[trap9, trap5].forEach((fn, index) => {
    it('item ==> ' + (index + 1), () => {
      for (let j = 0; j < 50000; j++) {
        for (let i = 0; i < list.length; i++) {
          fn(list[i][0])
        }
      }
      expect(1).toBe(1)
    })
  })
})
