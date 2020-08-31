export const solution_dfs_save = (vs, ws, V) => {
  const dfs = (i, res, value) => {
    // 装不下 / 超出
    if (res - vs[i] < 0 || i == vs.length) return value
    return Math.max(dfs(i + 1, res - vs[i], value + ws[i]), dfs(i + 1, res, value))
  }
  return dfs(0, V, 0)
}

export const solution_dfs = (vs, ws, V) => {
  const dfs = (i, res) => {
    if (i === vs.length || res == 0) return 0
    // 装不下
    else if (vs[i] > res) return dfs(i + 1, res)
    else return Math.max(dfs(i + 1, res - vs[i]) + ws[i], dfs(i + 1, res))
  }
  return dfs(0, V, 0)
}

export const solution_dp_from_up = (vs, ws, V) => {
  const results = new Array(V + 1).fill(new Array(vs.length + 1))
  const dfs = (i, res) => {
    if (results[i][res] != null) return results[i][res]
    if (i === vs.length || res == 0) return 0
    // 装不下
    else if (vs[i] > res) return dfs(i + 1, res)
    else return Math.max(dfs(i + 1, res - vs[i]) + ws[i], dfs(i + 1, res))
  }
  return dfs(0, V)
}

export const solution_dp_table = (vs, ws, V) => {
  const dp = new Array(V + 1).fill(0).map(() => new Array(vs.length + 1).fill(0))
  for (let i = 1; i <= V; i++) {
    for (let j = 1; j <= vs.length; j++) {
      if (i < vs[j - 1]) {
        dp[i][j] = dp[i][j - 1]
        continue
      }
      dp[i][j] = Math.max(dp[i][j - 1], dp[i - vs[j - 1]][j - 1] + ws[j - 1])
    }
  }
  return dp[V][vs.length]
}

// 动态公式
// dp(i, j) = Max(dp(i - 1, j ), dp(i - 1, j - vi) + wi)
export const solution_dp_table_2 = (vs, ws, V) => {
  const dp = new Array(vs.length + 1).fill(0).map(() => new Array(V + 1).fill(0))
  for (let i = 1; i <= vs.length; i++) {
    for (let j = 1; j <= V; j++) {
      if (j < vs[i - 1]) {
        dp[i][j] = dp[i - 1][j]
        continue
      }
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - vs[i - 1]] + ws[i - 1])
    }
  }
  return dp[vs.length][V]
}

// const res = [[[[2, 4, 3, 7], [2, 3, 5, 5], 10], 10], [[[2, 4, 3, 7], [2, 3, 5, 5], 8]], [[[2, 7, 3, 7, 4, 6, 5, 6, 2, 4], [2, 3, 5, 5, 3, 6, 5, 3, 2, 8], 16]]]

// console.log(solution_dp_table(...res[0][0]))
// console.log(solution_dp_table(...res[1][0]))
// console.log(solution_dp_table(...res[2][0]))

// 动态公式
// dp(V) = Max(dp(V), dp(V - vi) + wi)

export const solution_dp_promote = (vs, ws, V) => {
  const dp = new Array(V + 1).fill(0)
  for (let i = 0; i < vs.length; i++) {
    for (let j = V; j >= vs[i]; j--) {
      dp[j] = Math.max(dp[j - vs[i]] + ws[i], dp[j])
    }
  }
  return dp[V]
}

const res = [[[[2, 4, 3, 7], [2, 3, 5, 5], 10], 10], [[[2, 4, 3, 7], [2, 3, 5, 5], 8]], [[[2, 7, 3, 7, 4, 6, 5, 6, 2, 4], [2, 3, 5, 5, 3, 6, 5, 3, 2, 8], 16]]]

console.log(solution_dp_promote(...res[0][0]))
console.log(solution_dp_promote(...res[1][0]))
console.log(solution_dp_promote(...res[2][0]))
