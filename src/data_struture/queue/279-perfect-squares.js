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
var numSquares = function (n) {
  let num = Math.floor(n, 0.5)
  let list = []
  let step = 0
  for (let i = 0; i < num; i++) {
    list.push({
      max: i,
      n
    })
  }
  while (list.length) {
    let size = list.length
  }
}
