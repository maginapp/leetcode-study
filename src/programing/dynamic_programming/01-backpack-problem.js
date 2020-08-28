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
  const dp = new Array(V + 1).fill(new Array(vs.length + 1).fill(0))
  for (let i = 1; i <= V; i++) {
    for (let j = 0; j < vs.length; j++) {
      if (i < vs[j]) continue
      dp[i][j] = Math.max(dp[i][j], dp[i - vs[j]][j] + ws[j])
    }
  }
}

export const solution_dp_table_2 = (vs, ws, V) => {
  const dp = new Array(vs.length + 1).fill(new Array(V + 1).fill(0))
  for (let i = 1; i < vs.length; i++) {
    console.log(dp[i])
    for (let j = 1; j <= V; j++) {
      if (j < vs[i]) continue
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - vs[i]] + ws[i])
    }
  }
  return dp[vs.length][V]
}

const res = [[[[2, 4, 3, 7], [2, 3, 5, 5], 10], 10], [[[2, 4, 3, 7], [2, 3, 5, 5], 8]], [[[2, 7, 3, 7, 4, 6, 5, 6, 2, 4], [2, 3, 5, 5, 3, 6, 5, 3, 2, 8], 16]]]

console.log(solution_dp_from_up(...res[0][0]))
console.log(solution_dp_from_up(...res[1][0]))
console.log(solution_dp_from_up(...res[2][0]))
console.log(solution_dp_table_2(...res[0][0]))
console.log(solution_dp_table_2(...res[1][0]))
console.log(solution_dp_table_2(...res[2][0]))
