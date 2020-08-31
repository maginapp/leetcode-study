/*
|数量 | 价值 |重量 |
|:--- | :--:| --:|
|  4  |  2  |  3 |
|  3  |  3  |  4 |
|  2  |  4  |  5 |
*/

/*
// 状态转移
ks(i) = Max(ks(i), ks(i - wi * k) + vi * k) k <= ni 


// 初始值设置 => 合法状态值0 / 正负无穷

*/

export const muiltyBackpack = (wa, va, na, c) => {
  const dp = new Array(c + 1).fill(0)
  for (let i = 0; i < wa.length; i++) {
    for (let j = c; j >= wa[i]; j--) {
      for (let k = 1; k <= na[i]; k++) {
        const res = j - k * wa[i]
        if (res < 0) break
        dp[j] = Math.max(dp[j], dp[res] + k * va[i])
      }
    }
  }
  return dp[c + 1]
}

muiltyBackpack([3, 4, 5], [2, 3, 4], [4, 3, 2], 15) // 11
