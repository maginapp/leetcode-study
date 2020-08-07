/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
// 计算次数 2**1 + 2**2 + 2 ** n  => 2ⁿ⁺¹-2
export var findTargetSumWays_chaoshi = function (nums, S) {
  const addArr = []
  const l = nums.length
  nums.forEach((num, index) => {
    addArr[l - 1 - index] = (addArr[l - 1 - index + 1] || 0) + nums[l - 1 - index]
  })
  let queue = [nums[0], -nums[0]]
  let i = 1
  while (i < nums.length) {
    let size = queue.length
    if (nums[i] === 0) continue
    while (size--) {
      let num = queue.shift()
      if (num + addArr[i] >= S) queue.push(num + nums[i])
      if (num - addArr[i] <= S) queue.push(num - nums[i])
    }
    i++
  }
  return queue.filter(item => item === S).length
}

// console.log(findTargetSumWays([1, 1, 1, 1, 1], 3))
// console.log(findTargetSumWays([1, 1, 1, 1, 1, 1, 1], 5))
// console.log(findTargetSumWays([1, 4, 5, 3, 4, 3, 3, 2, 3], 16))

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
export var findTargetSumWays_study_1 = function (nums, S) {
  return help(nums, S, 0)
}

function help(nums, S, index) {
  if (nums.length === index) {
    return S === 0 ? 1 : 0
  }

  return help(nums, S - nums[index], index + 1) + help(nums, S + nums[index], index + 1)
}

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */

export var findTargetSumWays_study_2 = function (nums, S) {
  let sum = 0
  for (let num of nums) {
    sum += num
  }
  if (sum < S || (sum + S) % 2 === 1) return 0 // 累加和是奇数  只能得到奇数
  let target = (sum + S) / 2
  /*
  [1,1,1,1,1,1,1,1,1] 5 => (9 + 5) / 2 => target = 7
  new Array(8).fill(0)
  dp[0] = 1
  遍历 target-- 到num
  // 以上分析有问题 不适合动态思路

  从尾部分析??
  arr[n]
  // 需要先学习动态规划 => 背包问题

  */
  let dp = new Array(target + 1).fill(0)
  dp[0] = 1
  // 遍历nums: nums[0] => nums[nums.length - 1] 递增
  for (let num of nums) {
    // 遍历 [num, target]: target => num 递减
    // target >= num才会执行for循环代码
    for (let i = target; i >= num; i--) {
      dp[i] += dp[i - num]
    }
  }
  return dp[target]
}

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
export var findTargetSumWays_dfs = function (nums, S) {
  const utils = (nums, index, data) => {
    if (nums.length === index) {
      return data === 0 ? 1 : 0
    }
    return utils(nums, index + 1, data - nums[index]) + utils(nums, index + 1, data + nums[index])
  }
  return utils(nums, 0, S)
}

// 重复调用是减少了函数的创建
export var findTargetSumWays_dfs_yichu = function (nums, S) {
  return utils(nums, 0, S)
}

// dfs提升
export var findTargetSumWays_dfs_promote_52_80 = function (nums, S) {
  let sum = 0
  for (let num of nums) {
    sum += num
  }
  if (sum < S || (sum + S) % 2 === 1) return 0 // 累加和是奇数  只能得到奇数
  return utils(nums, 0, S)
}

const utils = (nums, index, data) => {
  if (nums.length === index) {
    return data === 0 ? 1 : 0
  }
  return utils(nums, index + 1, data - nums[index]) + utils(nums, index + 1, data + nums[index])
}

// 动态规划
export var findTargetSumWays_dp = function (nums, S) {
  return utils(nums, 0, S)
}

// 作者：GuYueJiaJie
// 链接：https://leetcode-cn.com/problems/target-sum/solution/javascriptti-jie-by-guyuejiajie-10/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

/*
给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，你都可以从 + 或 -中选择一个符号添加在前面。

返回可以使最终数组和为目标数 S 的所有添加符号的方法数。


示例：

输入：nums: [1, 1, 1, 1, 1], S: 3
输出：5
解释：

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

一共有5种方法让最终目标和为3。
 

提示：

数组非空，且长度不会超过 20 。2 ** 20
初始的数组的和不会超过 1000 。
保证返回的最终结果能被 32 位整数存下。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/target-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/
