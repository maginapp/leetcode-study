/*
今天遇到了一个场景：需要对一个固定长度的区间进行随机分段，段长度需要满足一个范围区间
长度L 分段数n 区间 [x,y]

例如，把长度为 5 的线段，分成 3 份，每份不小于 1，不大于 2.5
*/

/*

CL >= n * x    CL >= 3
CL <= n * y    CL <= 7.5

当前长度CL  = L | 5 | 假设首段绳子a长度2 =>剩余3

首段绳子a 剩余绳子长度需要满足 n - 1端分割长度要求
CL - a >= (n - 1) * x   a <= CL - (n - 1) * x  |  a <= 3  |  a <= 2
CL - a <= (n - 1) * y   a >= CL - (n - 1) * y  |  a >= 0  |  a >= 0.5

a的可选长度区间 与 需要的区间 [x, y的交集]
[CL - (n - 1) * y, CL - (n - 1) * x] => [x, y] 交集  |  [0, 4]交集[1, 2.5] => [1, 2.5]  |  [0.5, 2]交集[1, 2.5] => [1, 2]

*/

const splitLine = (L, n, min, max, limted = 1) => {
  if (L < n * min || L > n * max) return false
  if (L === n * min) return new Array(n).fill(min)
  if (L === n * max) return new Array(n).fill(max)
  if (n === 1) return [L]
  const scale = Math.pow(10, limted)
  let tempMin
  let tempMax
  let CL = L
  const arr = []
  let item
  while (n > 1) {
    n--
    tempMin = CL - n * max
    tempMax = CL - n * min
    if (tempMin < min) {
      tempMin = min
    }
    if (tempMax > max) {
      tempMax = max
    }
    item = +(Math.floor(Math.random() * ((tempMax - tempMin) * scale + 1)) / 10 + tempMin).toFixed(limted)
    CL = CL - item
    arr.push(item)
  }
  arr.push(+CL.toFixed(limted))
  return arr
}

console.log(splitLine(5, 3, 1, 2.5))

console.log(splitLine(15, 3, 2, 5))
console.log(splitLine(15, 5, 3, 5))
console.log(splitLine(15, 4, 3, 5))

console.log(splitLine(5, 3, 1, 2.5))

console.log(splitLine(15, 3, 2, 5))
console.log(splitLine(15, 5, 3, 5))
console.log(splitLine(15, 4, 3, 5))

console.log(1)
