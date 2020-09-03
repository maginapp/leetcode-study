/*
你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' 。每个拨轮可以自由旋转：例如把 '9' 变为  '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。

锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。

列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。

字符串 target 代表可以解锁的数字，你需要给出最小的旋转次数，如果无论如何不能解锁，返回 -1。

[['0201', '0101', '0102', '1212', '2002'], '0202', 6],

0000 0100 0200 1200 1201 1202 0202


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

export var openLock2 = function (deadends, target) {
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

export var openLock_success_1 = function (deadends, target) {
  const l = target.length
  deadends = [...new Set(deadends)]
  const bfs = (deadends, target) => {
    const arr = ['0000']
    const saved = ['0000']
    if (deadends.includes('0000')) return -1
    let step = -1
    let size
    let str
    while (arr.length) {
      size = arr.length
      step++
      // console.log(saved)
      for (let i = 0; i < size; i++) {
        str = arr.shift()
        if (str === target) {
          // console.log('success', deadends)
          return step
        }
        for (let i = 0; i < l; i++) {
          if (str[i] != target[i]) {
            getNext(i, str, 1, deadends, arr, saved, true)
            getNext(i, str, -1, deadends, arr, saved, true)
          }
        }
        if (saved.length + deadends.length + 1 === 10000) {
          return -1
        }
      }
    }
    return -1
  }

  const getNext = (i, str, step, deadends, arr, saved, more) => {
    let num = (+str[i] + step + 10) % 10
    let nextStr = str.substr(0, i) + num + str.substr(i + 1)
    if (saved.includes(nextStr)) return
    if (deadends.includes(nextStr)) {
      if (!more) return
      let index = 0
      while (index < i) {
        getNext(index, str, 1, deadends, arr, saved, false)
        index++
      }
      index = i + 1
      while (index < str.length) {
        getNext(index, str, -1, deadends, arr, saved, false)
        index++
      }
      return
    }
    arr.push(nextStr)
    saved.push(nextStr)
  }

  return bfs(deadends, target)
}

export var openLock_success_2_300s = function (deadends, target) {
  const l = target.length
  deadends = [...new Set(deadends)]
  const bfs = (deadends, target, map) => {
    const arr = ['0000']
    const saved = ['0000']
    if (deadends.includes('0000')) return -1
    let step = -1
    let size
    let str
    while (arr.length) {
      size = arr.length
      step++
      // console.log(saved)
      for (let i = 0; i < size; i++) {
        str = arr.shift()
        if (str === target) {
          // console.log('success', deadends)
          return step
        }
        if (map.has(str)) {
          return step + map.get(str)
        }
        for (let i = 0; i < l; i++) {
          if (str[i] != target[i]) {
            getNext(i, str, 1, deadends, arr, saved, true)
            getNext(i, str, -1, deadends, arr, saved, true)
          }
        }
        if (saved.length + deadends.length + 1 === 10000) {
          return -1
        }
      }
    }
    return -1
  }

  const getNext = (i, str, step, deadends, arr, saved, more) => {
    let num = (+str[i] + step + 10) % 10
    let nextStr = str.substr(0, i) + num + str.substr(i + 1)
    if (saved.includes(nextStr)) return
    if (deadends.includes(nextStr)) {
      if (!more) return
      let index = 0
      while (index < i) {
        getNext(index, str, 1, deadends, arr, saved, false)
        index++
      }
      index = i + 1
      while (index < str.length) {
        getNext(index, str, -1, deadends, arr, saved, false)
        index++
      }
      return
    }
    arr.push(nextStr)
    saved.push(nextStr)
  }

  const getNextEnd = (i, str, step, deadends, map, list, count) => {
    let num = (+str[i] + step + 10) % 10
    let nextStr = str.substr(0, i) + num + str.substr(i + 1)
    if (map.has(nextStr)) return
    if (deadends.includes(nextStr)) return
    list.push(nextStr)
    map.set(nextStr, count)
  }

  const getEndList = (deadends, target, deep = 1) => {
    let l = target.length
    let map = new Map()
    let list = [target]
    let count = 0
    map.set(target, count)
    while (deep) {
      let size = list.length
      let mapS = map.size
      for (let j = 0; j < size; j++) {
        let str = list.shift()
        if (str === '0000') return map
        for (let i = 0; i < l; i++) {
          getNextEnd(i, str, 1, deadends, map, list, count + 1)
          getNextEnd(i, str, -1, deadends, map, list, count + 1)
        }
      }
      if (mapS === map.size) {
        map.set('0000', -1)
        return map
      }
      count++
      deep--
    }
    return map
  }

  const map = getEndList(deadends, target, 10)

  if (map.has('0000')) return map.get('0000')

  // console.log([...map])

  return bfs(deadends, target, map)
}

export var openLock_success_3_140s = (deadends, target) => {
  deadends = new Set(deadends)
  let headList = ['0000']
  let tailList = [target]
  let l = target.length
  let heads = new Set(['0000'])
  let tails = new Set([target])
  let headStep = 0
  let tailStep = 0
  if (deadends.has('0000')) return -1
  let hl, tl
  while (headList.length && tailList.length) {
    hl = headList.length
    tl = tailList.length
    while (hl) {
      let str = headList.shift()
      if (tailList.includes(str)) {
        return tailStep + headStep
      }
      for (let i = 0; i < l; i++) {
        let upstr = getNextStr(str, i, 1)
        if (!deadends.has(upstr) && !heads.has(upstr)) {
          headList.push(upstr)
          heads.add(upstr)
        }
        let downstr = getNextStr(str, i, -1)
        if (!deadends.has(downstr) && !heads.has(downstr)) {
          headList.push(downstr)
          heads.add(downstr)
        }
      }
      hl--
    }
    headStep++
    while (tl) {
      let str = tailList.shift()
      if (headList.includes(str)) {
        return tailStep + headStep
      }
      for (let i = 0; i < l; i++) {
        let upstr = getNextStr(str, i, 1)
        if (!deadends.has(upstr) && !tails.has(upstr)) {
          tailList.push(upstr)
          tails.add(upstr)
        }
        let downstr = getNextStr(str, i, -1)
        if (!deadends.has(downstr) && !tails.has(downstr)) {
          tailList.push(downstr)
          tails.add(downstr)
        }
      }
      tl--
    }
    tailStep++
  }
  return -1
}

export var openLock_success_4_116_42_6 = (deadends, target) => {
  deadends = new Set(deadends)
  let headList = new Set(['0000'])
  let tailList = new Set([target])
  let l = target.length
  let headStep = 0
  let tailStep = 0
  if (deadends.has('0000')) return -1
  let set
  while (headList.size && tailList.size) {
    set = new Set()
    for (let str of headList) {
      if (tailList.has(str)) {
        return tailStep + headStep
      }
      for (let i = 0; i < l; i++) {
        let upstr = getNextStr(str, i, 1)
        if (!deadends.has(upstr)) {
          set.add(upstr)
        }
        let downstr = getNextStr(str, i, -1)
        if (!deadends.has(downstr)) {
          set.add(downstr)
        }
      }
    }
    headList = set
    headStep++
    set = new Set()
    for (let str of tailList) {
      if (headList.has(str)) {
        return tailStep + headStep
      }
      for (let i = 0; i < l; i++) {
        let upstr = getNextStr(str, i, 1)
        if (!deadends.has(upstr)) {
          set.add(upstr)
        }
        let downstr = getNextStr(str, i, -1)
        if (!deadends.has(downstr)) {
          set.add(downstr)
        }
      }
    }
    tailList = set
    tailStep++
  }
  return -1
}

export var openLock = (deadends, target) => {
  deadends = new Set(deadends)
  let headList = new Set(['0000'])
  let tailList = new Set([target])
  let l = target.length
  let headStep = 0
  if (deadends.has('0000')) return -1
  let set
  while (headList.size && tailList.size) {
    set = new Set()
    for (let str of headList) {
      if (tailList.has(str)) {
        return headStep
      }
      for (let i = 0; i < l; i++) {
        let upstr = getNextStr(str, i, 1)
        if (!deadends.has(upstr)) {
          set.add(upstr)
        }
        let downstr = getNextStr(str, i, -1)
        if (!deadends.has(downstr)) {
          set.add(downstr)
        }
      }
    }
    headList = tailList
    tailList = set
    headStep++
  }
  return -1
}
const getNextStr = (str, index, direction) => {
  const num = (+str[index] + 10 + direction) % 10
  return str.substr(0, index) + num + str.substr(index + 1)
}

// console.log(openLock(['0201', '0101', '0102', '1212', '2002'], '0200'))
// console.log(openLock(['0201', '0101', '0102', '1212', '2002'], '0202'))
// console.log(openLock(['8888'], '0009'))
// console.log(openLock(['8887', '8889', '8878', '8898', '8788', '8988', '7888', '9888'], '8888'))
// eslint-disable-next-line
// console.log(openLock(["7867", "6676", "8687", "7886", "6768", "8877", "6767", "6666", "7876", "6688", "6677", "6877", "7786", "6778", "6868", "7668", "7666", "8868", "7887", "6788", "7687", "7788", "7877", "6867", "8787", "8878", "6668", "6878", "6766", "8667", "8688", "8887", "8766", "8867", "7866", "6686", "7776", "7888", "6777", "6678", "6876", "8666", "6667", "7768", "7688", "6786", "7766", "8866", "8776", "8888", "7678", "7667", "8786", "8768", "8677", "7868", "7878", "8886", "8668", "7777", "7767", "8778", "8777", "7677", "8686", "8788", "8678", "7676", "8876", "8676", "7686", "6887", "6787", "7787", "6866", "8767", "7778", "6886", "6687", "6888"], "6776"))
