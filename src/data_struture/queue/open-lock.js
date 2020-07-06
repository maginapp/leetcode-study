/*
你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' 。每个拨轮可以自由旋转：例如把 '9' 变为  '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。

锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。

列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。

字符串 target 代表可以解锁的数字，你需要给出最小的旋转次数，如果无论如何不能解锁，返回 -1。
*/

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
export var openLock1 = function (deadends, target) {
  const l = target.length
  const bfs = (deadends, target, start) => {
    const arr = ['0000']
    const saved = arr
    let str
    let size
    let step = 0
    while (arr.length) {
      size = arr.length
      step++
      for (let i = 0; i < size; i++) {
        str = arr.shift()
        if (deadends.includes(str)) continue
        if (str === target) break
        for (let i = 0; i < l; i++) {
          if (str[i] != target[i]) {
            let nextStr = str.substr(0, i) + target[i] + str.substr(i + 1)
            if (saved.includes(nextStr)) continue
            saved.push(nextStr)
            arr.push(nextStr)
          }
        }
      }
    }
  }
}

export var openLock = function (deadends, target) {
  const l = target.length
  const bfs = (deadends, target, start) => {
    const arr = [
      {
        str: '0000',
        index: -1,
        parent: ''
      }
    ]
    const saved = ['0000']
    let str
    let size
    let step = -1
    let obj
    while (arr.length) {
      size = arr.length
      step++
      for (let i = 0; i < size; i++) {
        obj = arr.shift()
        str = obj.str
        if (deadends.includes(str)) {
          if (obj.index === -1) continue
          let parent = obj.parent
          let sizeIndex = 0
          for (let i = 0; i < l; i++) {
            if (parent[i] == target[i]) {
              for (let index = 0; i < 10; index++) {
                let nextStr = parent.substr(0, i) + index + parent.substr(i + 1)
                // console.log('nextStr：' + nextStr)
                if (saved.includes(nextStr)) continue
                saved.push(nextStr)
                sizeIndex++
                arr.unshift({
                  str: nextStr,
                  index: -1,
                  parent: ''
                })
              }
            }
          }
          size += sizeIndex
        }
        if (str === target) break
        for (let i = 0; i < l; i++) {
          if (str[i] != target[i]) {
            let nextStr = str.substr(0, i) + target[i] + str.substr(i + 1)
            // console.log('nextStr-2：' + nextStr)
            if (saved.includes(nextStr)) continue
            saved.push(nextStr)
            arr.push({
              str: nextStr,
              parent: str,
              index: i
            })
          }
        }
      }
    }
    return step
  }
  return bfs(deadends, target)
}

// openLock(['0201', '0101', '0102', '1212', '2002'], '0202')
