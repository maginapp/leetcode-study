/*
给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

 

示例 1:

输入: coins = [1, 2, 5], amount = 11
输出: 3 
解释: 11 = 5 + 5 + 1
示例 2:

输入: coins = [2], amount = 3
输出: -1
 

说明:
你可以认为每种硬币的数量是无限的。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/coin-change
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/

// dp
// coin/amount  0 1 2 3 4 5 6 7 8 9 10 11
//   1          0 1 0 1 0 0
//   2          0 0 1 1 2 0
//   5          0 0 0 0 0 1

// 状态转移

// dp[i + 1] = Min(dp[i], dp[i - Ci * k] + 1)

export const coinChange_if = (coins, amount) => {
  const dp = new Array(amount + 1).fill(0)
  for (let i = 0; i < amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i + 1) {
        if (i + 1 - coins[j] != 0 && !dp[i + 1 - coins[j]]) {
          continue
        }
        const next = dp[i + 1 - coins[j]] + 1
        if (dp[i + 1] === 0) {
          dp[i + 1] = next
        } else {
          dp[i + 1] = Math.min(dp[i + 1], next)
        }
      }
    }
  }
  return dp[amount]
}

export const coinChange_for = (coins, amount) => {
  const dp = new Array(amount + 1).fill(0)
  for (let i = 0; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        if (i - coins[j] > 0 && dp[i - coins[j]] == 0) {
          continue
        }
        dp[i] = Math.min(dp[i] || dp[i - coins[j]] + 1, dp[i - coins[j]] + 1)
      }
    }
  }
  return dp[amount]
}

export const coinChange = (coins, amount) => {
  const dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER)
  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }
  return dp[amount] == Number.MAX_SAFE_INTEGER ? -1 : dp[amount]
}

export const coinChange_dfs = (coins, amount) => {
  let min = Number.MAX_SAFE_INTEGER

  // 降序，剪枝判断出大符合邀请则结束
  coins.sort((a, b) => b - a)

  const dfs = (coins, amount, count) => {
    if (amount < 0) return
    for (let i = 0; i < coins.length; i++) {
      if (amount % coins[i] == 0) {
        min = Math.min(min, count + amount / coins[i])
        return
      } else {
        dfs(coins, amount - coins[i], count + 1)
      }
    }
  }

  dfs(coins, amount, 0)

  return min === Number.MAX_SAFE_INTEGER ? -1 : min
}

// console.log(coinChange_dfs([1, 2, 5], 11))
// console.log(coinChange([1, 2, 5], 3))
// console.log(coinChange([6, 2, 5], 3))
// console.log(coinChange([6, 2, 5], 7))
// console.log(coinChange([6, 2, 5, 4], 7))
// console.log(coinChange([6, 4, 5, 2], 7))
