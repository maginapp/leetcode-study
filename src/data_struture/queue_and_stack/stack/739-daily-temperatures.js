/*
请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。

例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/daily-temperatures
*/

/*
index i
next  n  => (i, i + n - 1) 都小于 i,  对应的next的index 小于 i + n - 1 => 但是没用，遍历到此位置及之前判断会自动结束

*/

/**
 * @param {number[]} T
 * @return {number[]}
 */
export var dailyTemperatures_1388 = function (T) {
  const getDistance = (T, i) => {
    const val = T[i]
    let d = 1
    while (i + d < T.length) {
      if (T[i + d] > val) return d
      d++
    }
    return 0
  }
  let dis = []
  for (let i = 0; i < T.length; i++) {
    dis.push(getDistance(T, i))
  }
  return dis
}

export var dailyTemperatures_error = function (T) {
  const getDistance = (T, i, dis) => {
    const val = T[i]
    let d = 1
    let list = [-1]
    while (i + d < T.length) {
      if (T[i + d] > val) return d
      else {
        let nd = getDistance(T, i + d, dis)
        dis.push(nd)
        if (nd === 0) return 0
        d += nd + 1
      }
    }
    return 0
  }
  let dis = []
  for (let i = 0; i < T.length; i++) {
    dis.push(getDistance(T, i, dis))
  }
  return dis
}

export var dailyTemperatures_error_2 = function (T) {
  const getDistance = (T, i, dis) => {
    const val = T[i]
    let d = 1
    let list = [-1]
    while (i + d < T.length) {
      if (T[i + d] > val) return d
      else {
        let nd = getDistance(T, i + d, dis)
        dis[i] = nd
        dis[i] = dis[i] > T.length - i ? 0 : dis[i]
        d += nd + 1
      }
    }
    return d
  }
  let dis = new Array(T.length).fill(-1)
  for (let i = 0; i < T.length; i++) {
    if (dis[i] !== -1) continue
    dis[i] = getDistance(T, i, dis)
    dis[i] = dis[i] > T.length - i ? 0 : dis[i]
  }
  return dis
}

export var dailyTemperatures_176 = function (T) {
  const getDistance = (T, i, dis) => {
    const val = T[i]
    let d = 1
    while (i + d < T.length) {
      if (T[i + d] > val) return d
      else {
        let nd = getDistance(T, i + d, dis)
        dis[i + d] = nd
        if (nd === 0) return 0
        d += nd
      }
    }
    return 0
  }
  let dis = []
  for (let i = 0; i < T.length; i++) {
    let d = getDistance(T, i, dis)
    dis[i] = d
    if (d === 0) break
    i += d - 1
  }
  return dis
}

// 确认使用栈
// 栈 添加代查找元素的下标
// 当前元素大于栈顶元素，该元素最小
// 循环取到最大
export var dailyTemperatures = function (T) {
  let list = new Array(T.length).fill(0)
  let stack = []
  let topIndex
  for (let i = 0; i < T.length; i++) {
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      topIndex = stack.pop()
      list[topIndex] = i - topIndex
    }
    stack.push(i)
  }
  return list
}

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures_study = function (T) {
  let res = new Array(T.length).fill(0)
  let stack = []
  for (let i = 0; i < T.length; i++) {
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      let topIdx = stack.pop()
      res[topIdx] = i - topIdx
    }
    stack.push(i)
  }
  return res
}

// 作者：lvshanke
// 链接：https://leetcode-cn.com/problems/daily-temperatures/solution/dan-ke-xi-lie-yong-shi-9100nei-cun-10000-by-lvshan/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

const data = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
console.log(data)
