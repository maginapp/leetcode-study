/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
export var kthSmallest1 = function (matrix, k) {
  const n = matrix.length
  const list = {
    list: new Array(n).fill(0),
    val: Number.MIN_SAFE_INTEGER
  }
  const getMin = (matrix, data) => {
    let index = -1
    let min
    let val
    const list = data.list
    for (let i = 0; i < n; i++) {
      if (list[i] >= n || (i && list[i] === list[i - 1])) continue
      val = matrix[i][list[i]]
      if (val === data.val) {
        index = i
        min = val
        break
      }
      if (index === -1 || min > val) {
        index = i
        min = val
      }
    }
    list[index] += 1
    data.val = min
  }
  for (let i = 0; i < k; i++) {
    getMin(matrix, list)
  }
  return list.val
}

export var kthSmallest = function (matrix, k) {
  return matrix.flat(2).sort((a, b) => a - b)[k - 1]
}
