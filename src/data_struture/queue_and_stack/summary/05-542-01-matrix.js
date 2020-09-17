/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
// 题解
// 使用队列 逐层确定
// 优化修改访问过的值防止重复

// 思路1 逐个处理1
// 思路错误
export var updateMatrix_mind_error = function (matrix) {
  let room = []
  matrix.forEach((item, index) => {
    room[index] = []
    item.forEach(val => room[index.push(val ? Infinity : 0)])
  })
  let x = matrix.length
  let y = matrix[0].length
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      if (matrix[i][j]) func(i, j, room, 0)
    }
  }
  const func = (i, j, room, step) => {
    const queue = []
  }
}

// 思路
// 筛选所有初始点，待定值初始化为infinity
// 比较逐步 queue对应当前值 + 1 和目标值  并判断边界阈值
export var updateMatrix = function (matrix) {
  if (!(matrix && matrix.length && matrix[0].length)) return matrix
  const queue = []
  let x = matrix.length
  let y = matrix[0].length
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      if (!matrix[i][j]) queue.push({ i, j })
      else matrix[i][j] = Infinity
    }
  }
  while (queue.length) {
    let position = queue.shift()
    const { i, j } = position
    if (i - 1 >= 0 && matrix[i - 1][j] > matrix[i][j]) {
      matrix[i - 1][j] = matrix[i][j] + 1
      queue.push({ i: i - 1, j })
    }
    if (i + 1 < x && matrix[i + 1][j] > matrix[i][j]) {
      matrix[i + 1][j] = matrix[i][j] + 1
      queue.push({ i: i + 1, j })
    }
    if (j - 1 >= 0 && matrix[i][j - 1] > matrix[i][j]) {
      matrix[i][j - 1] = matrix[i][j] + 1
      queue.push({ i, j: j - 1 })
    }
    if (j + 1 >= 0 && matrix[i][j + 1] > matrix[i][j]) {
      matrix[i][j + 1] = matrix[i][j] + 1
      queue.push({ i, j: j + 1 })
    }
  }
  return matrix
}

updateMatrix([[0]])

/*给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。

两个相邻元素间的距离为 1 。

示例 1:
输入:

0 0 0
0 1 0
0 0 0
输出:

0 0 0
0 1 0
0 0 0
示例 2:
输入:

0 0 0
0 1 0
1 1 1
输出:

0 0 0
0 1 0
1 2 1
注意:

给定矩阵的元素个数不超过 10000。
给定矩阵中至少有一个元素是 0。
矩阵中的元素只在四个方向上相邻: 上、下、左、右。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/01-matrix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*/
