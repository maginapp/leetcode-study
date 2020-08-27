/*
5，12），（4，3），（7，10），（2，3），（6，6）

const v = [5, 4, 7, 2, 6]
const m = [12, 3, 10, 3, 6]

*/

export const getResult = (v, m, V) => {
  const dp = new Array(V + 1).fill(0)
  for (let i = 0; i <= V; i++) {
    for (let j = 0; j < v.length; j++) {
      dp[i] = Math.max(dp[i], dp[i - v[j]] + m[j])
    }
  }
}
