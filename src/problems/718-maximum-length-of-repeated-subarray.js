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
  for (let i = 0; i < B.length; i++) {
    val = B[i]
    if (!map[val]) continue
    tempMax = 1
    for (let j = 0; j < map[val].length; j++) {
      temp = 1
      while (i + temp < B.length && A[map[val][j] + temp] === B[i + temp]) {
        temp++
      }
      tempMax = Math.max(temp, tempMax)
    }
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

export var findLengthRememberOld = function (A, B) {
  const map = {}
  for (let i = 0; i < A.length; i++) {
    map[A[i]] = map[A[i]] || []
    map[A[i]].push(i)
  }

  let val
  let max = 0
  let tempMax
  let temp
  let same = 0
  for (let i = 0; i < B.length; i++) {
    val = B[i]
    if (!map[val]) continue
    tempMax = 1
    for (let j = 0; j < map[val].length; j++) {
      if (same) {
        temp = same
        same--
      } else temp = 1
      while (i + temp < B.length && A[map[val][j] + temp] === B[i + temp]) {
        if (B[i + temp] === B[i] && temp - 1 === same) {
          same++
        }
        temp++
      }
      tempMax = temp > tempMax ? temp : tempMax
    }
    max = max > tempMax ? max : tempMax
  }
  return max
}

export var findLengthRememberPromote = function (A, B) {
  // 记录A的数据位置
  const map = {}
  for (let i = 0; i < A.length; i++) {
    map[A[i]] = map[A[i]] || []
    map[A[i]].push(i)
  }

  let val // 当前检索数值
  let max = 0 // 最大值
  let tempMax // 当前检索数组的最大值
  let temp // 当前匹配的A数组元素的长度
  let same = 0 // 头部元素相同的数量 用于降低时间复杂度
  for (let i = 0; i < B.length && B.length - i > max; i++) {
    val = B[i]
    if (!map[val]) continue // A中不包含 跳出
    tempMax = 1
    for (let j = 0; j < map[val].length; j++) {
      // A剩余元素长度小于当前最大值，跳出
      if (A.length - map[val][j] <= max) {
        // 清楚当前val的same
        same = 0
        break
      }
      // same有值 从same + 1开始遍历
      if (same) {
        temp = same
        same--
      } else temp = 1
      while (i + temp < B.length && A[map[val][j] + temp] === B[i + temp]) {
        // 与头部元素相同 记录相同数量
        if (B[i + temp] === val && temp - 1 === same) {
          same++
        }
        temp++
      }
      tempMax = temp > tempMax ? temp : tempMax
    }
    max = max > tempMax ? max : tempMax
  }
  return max
}

export var findLengthRemember = function (A, B) {
  let maxLength = 0

  if (A.length > B.length) {
    const temp = A
    A = B
    B = temp
  }

  for (let i = 0; i < A.length; i++) {
    if (maxLength >= Math.min(A.length - i, B.length)) break

    let len = 0
    let count = 0
    let index = 1
    for (let j = 0; j < Math.min(A.length - i, B.length); j++) {
      if (A[i + j] !== B[j]) {
        count = 0
        continue
      }
      while (i + j + index < A.length && j + index < B.length && A[i + j + index] === B[j + index]) {
        if (B[i] === B[i + j + index] && count === index - 1) {
          count++
        }
        index++
      }
      len = Math.max(len, index)

      // 相等
      if (count) {
        index = count - 1
        count--
      } else {
        index = 1
        j = j + index
      }
      // A[i + j] === B[j] 进如while判断直到失败
      // A[i + j + index] !== B[j + index]
      // j = j + index
    }

    maxLength = Math.max(maxLength, len)
  }

  // for (let i = 1; i < B.length; i++) {
  //   if (maxLength >= Math.min(B.length - i, A.length)) break

  //   let len = 0
  //   let count = 0
  //   for (let j = 0; j < Math.min(B.length - i, A.length); j++) {
  //     if (B[i + j] !== A[j]) continue

  //     let index = 1
  //     if (count) {
  //       index = count
  //       count--
  //     }
  //     while (i + j + index < B.length && j + index < A.length && B[i + j + index] === A[j + index]) {
  //       index++
  //     }
  //     len = Math.max(len, index)

  //     j = j + index - 1
  //   }

  //   maxLength = Math.max(maxLength, len)
  // }

  return maxLength
}
