var openLock = function (deadends, target) {
  deadends.push(target)
  let vds = [0, 0, 0, -1, 0, 0, 0, 1, 0, 0, 0]
  let stepLength = 0
  let cashArr = []
  while (target != '0000') {
    for (var i = 0; i < vds.length - 3; i++) {
      let tepStr = ''
      for (var j = 0; j < target.length; j++) {
        if (target[j] == 0 && vds[j + i] != 0) {
          tepStr = ''
          break
        }
        tepStr += (+target[j] > 4 ? +target[j] - vds[j + i] : +target[j] + vds[j + i]) % 10
      }
      if (!deadends.includes(tepStr) && tepStr) {
        target = tepStr
        stepLength++
        break
      } else {
        cashArr.push(target)
        if (cashArr.filter(item => item == target).length == 8) {
          return -1
        }
      }
    }
  }
  return stepLength
}

var openLock = function (deadends, target) {
  const limits = target.length
  target = parseInt(target, 10)
  let close = new Set()
  deadends.forEach(str => close.add(parseInt(str, 10)))
  if (close.has(0)) {
    return -1
  }
  //双队列 交替遍历
  let headQueue = new Set([0])
  let tailQueue = new Set([target])
  let times = 0
  while (headQueue.size && tailQueue.size) {
    /**存放新一轮衍变出来的数 */
    let thisSet = new Set()
    for (let curr of headQueue) {
      //将待衍变的数拿出来，进行判断或衍变
      if (tailQueue.has(curr)) {
        //假如待衍变的数存在于第二队列，即初始0与目标值连成一线
        return times
      }
      let loop = limits
      while (loop) {
        loop--
        let upNext = getNext(curr, 10 ** loop, true)
        if (!close.has(upNext)) {
          thisSet.add(upNext)
        }
        let downNext = getNext(curr, 10 ** loop, false)
        if (!close.has(downNext)) {
          thisSet.add(downNext)
        }
      }
    }
    //乾坤挪移 把第一队列衍生出来的数存在第二队列
    headQueue = tailQueue
    tailQueue = thisSet
    times++
  }
  return -1
}
/**
 * @param {number} curr 当前要衍变的值
 * @param {number} num 演变位数
 * @param {boolean} isUp 是否向上衍变
 * @return {number}
 */
var getNext = (curr, num, isUp) => {
  let old = Math.floor(curr / (num * 10))
  let now
  if (isUp) {
    now = Math.floor((curr + num) / (num * 10))
    curr = old === now ? curr + num : curr - num * 9
  } else {
    now = Math.floor((curr - num) / (num * 10))
    curr = old == now ? curr - num : curr + num * 9
  }
  return curr
}

/**
 * @param {string[]} deadends 雷区
 * @param {string} target 密码锁密码
 * @return {number}
 */
var openLock = function (deadends, target) {
  /**密码锁的密码个数 */
  const limits = target.length
  /**过滤集合 */
  let close = new Set(deadends)
  let start = new Array(limits).fill('0').join('')
  if (close.has(start)) {
    return -1
  }
  /**队列 先进先出 */
  let queue = [start]
  close.add(start)
  /**最少转动次数 */
  let times = 0
  while (queue.length) {
    /**当前轮次的个数 */
    //忽略过滤集合 第一轮由0000衍生出来8个  第二轮由第一轮8个衍生出来8*8=64个
    //只有遍历完当前轮次的个数，最少转动次数times才会加一
    let thisTimes = queue.length
    while (thisTimes) {
      thisTimes--
      /**当前要衍变的值 */
      let curr = queue.shift()
      if (curr == target) {
        return times
      }
      let loop = limits
      while (loop) {
        loop--
        let upNext = getNext(curr, loop, true)
        if (!close.has(upNext)) {
          close.add(upNext)
          queue.push(upNext)
        }
        let downNext = getNext(curr, loop, false)
        if (!close.has(downNext)) {
          close.add(downNext)
          queue.push(downNext)
        }
      }
    }
    times++
  }
  return -1
}
/**
 * @param {string} curr 当前要衍变的值
 * @param {number} num 演变位数
 * @param {boolean} isUp 是否向上衍变
 * @return {string}
 */
var getNext = (curr, num, isUp) => {
  let arr = curr.split('')
  let char = parseInt(arr[num]) + (isUp ? 1 : -1)
  if (char > 9) char = 0
  if (char < 0) char = 9
  arr[num] = String(char)
  return arr.join('')
}

openLock(['0000'], '8888')
