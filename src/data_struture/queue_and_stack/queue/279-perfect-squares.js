/*
279. 完全平方数
给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

示例 1:

输入: n = 12
输出: 3 
解释: 12 = 4 + 4 + 4.
示例 2:

输入: n = 13
输出: 2
解释: 13 = 4 + 9.
通过次数69,280提交次数122,202

取平方根 逐个递减
依次读取 

n   a
n - a ** 2   b 
n - a ** 2 - b ** 2  c

12  3 
3   1
2   1
1   1

12 2 ** 2  * 4 => 16

逐个尝试  知道当前尝试的平方数 * 当前最小长度  小于当前的值

*/

/**
 * @param {number} n
 * @return {number}
 */
export var numSquares_2592_65 = function (n) {
  let list = [n]
  let step = 0
  while (list.length) {
    let size = list.length
    step++
    while (size) {
      let res = list.shift()
      let num = Math.floor(Math.pow(res, 0.5))
      for (; num > 0; num--) {
        let data = res - num * num
        if (data === 0) return step
        else list.push(data)
      }
      size--
    }
  }
}

export var numSquares_error_1 = function (n) {
  let list = [n]
  let step = 0
  let map = {}
  while (list.length) {
    let size = list.length
    step++
    while (size) {
      let res = list.shift()
      let num = Math.floor(Math.pow(res, 0.5))
      for (; num > 0; num--) {
        let data = res - num * num
        if (map[data]) {
          return map[data] + step
        }
        let saved = n - data
        if (!map[saved]) map[saved] = step
        if (data === 0) return step
        else list.push(data)
      }
      size--
    }
  }
}

export var numSquares_104_43 = function (n) {
  let init = Math.floor(Math.pow(n, 0.5))
  let list = [
    {
      n,
      init
    }
  ]
  let step = 0
  while (list.length) {
    let size = list.length
    step++
    while (size) {
      let item = list.shift()
      let res = item.n
      let pow = Math.floor(Math.pow(res, 0.5))
      let num = pow < item.n ? pow : item.n
      // let judge = Math.floor(Math.pow(num, 0.5))
      let judge = Math.floor(num / 2)
      for (; num > judge; num--) {
        let data = res - num * num
        if (data === 0) return step
        else
          list.push({
            n: data,
            init: pow < item.n ? pow : item.n
          })
      }
      size--
    }
  }
}

export var numSquares_larger_than_104_43 = function (n) {
  let init = Math.floor(Math.pow(n, 0.5))
  let list = [
    {
      n,
      init
    }
  ]
  let step = 0
  while (list.length) {
    let size = list.length
    step++
    while (size) {
      let item = list.shift()
      let res = item.n
      let max = Math.floor(Math.pow(res, 0.5))
      let min = Math.floor(Math.pow(res / 4, 0.5))
      let num = max < item.n ? max : item.n
      for (; num > min; num--) {
        let data = res - num * num
        if (data === 0) return step
        else
          list.push({
            n: data,
            init: max < item.n ? max : item.n
          })
      }
      size--
    }
  }
}

export var numSquares_MuYunyun = function (n) {
  const list = []
  list.push({ num: n, step: 0 })
  const visitedObj = { [n]: true }
  while (list.length > 0) {
    const { num, step } = list.shift()
    for (let i = 1; ; i++) {
      const extraNum = num - i * i
      if (extraNum < 0) break
      // this line return the result in advance, it reduces perform time very much.
      if (extraNum === 0) return step + 1
      if (!visitedObj[extraNum]) {
        visitedObj[extraNum] = true
        list.push({ num: num - i * i, step: step + 1 })
      }
    }
  }
}

export var numSquares = function (n) {
  let init = Math.floor(Math.pow(n, 0.5))
  let list = [
    {
      n,
      init
    }
  ]
  let step = 0
  while (list.length) {
    let size = list.length
    step++
    while (size) {
      let item = list.shift()
      let res = item.n
      let max = Math.floor(Math.pow(res, 0.5))
      let min = Math.floor(Math.pow(res / 4, 0.5))
      let num = max < item.n ? max : item.n
      for (; num > min; num--) {
        let data = res - num * num
        if (data === 0) return step
        else
          list.push({
            n: data,
            init: max < item.n ? max : item.n
          })
      }
      size--
    }
  }
}
