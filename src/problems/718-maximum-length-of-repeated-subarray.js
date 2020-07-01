/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */

export var findLength = function (A, B) {
  const map = {}
  for (let i = 0; i < A.length; i++) {
    map[A[i]] = map[A[i]] || []
    map[A[i]].push(i)
  }

  let val
  let max = 0
  let tempMax
  let temp
  for (let i = 0; i < B.length; i) {
    val = B[i]
    if (!map[val]) {
      i++
      continue
    }
    tempMax = 1
    for (let j = 0; j < map[val].length; j++) {
      temp = 1
      while (i + temp < B.length && A[map[val][j] + temp] === B[i + temp]) {
        temp++
      }
      tempMax = Math.max(temp, tempMax)
    }
    i += tempMax
    max = Math.max(tempMax, max)
  }

  return max
}

// const arr1 = [1, 0, 0, 0, 1]
// const arr2 = [1, 0, 0, 1, 1]

// console.log(findLength(arr1, arr2))

/*
718. 最长重复子数组
给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。

示例：

输入：
A: [1,2,3,2,1]
B: [3,2,1,4,7]
输出：3
解释：
长度最长的公共子数组是 [3, 2, 1] 。

提示：

1 <= len(A), len(B) <= 1000
0 <= A[i], B[i] < 100
通过次数30,644提交次数58,161
*/
