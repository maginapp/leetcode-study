/*
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

var minDistance_error = function (word1, word2) {
  const dfs = (i, j) => {
    if (i === 0) return j
    if (j === 0) return i
    if (word1[i] === word2[j]) {
      return 1 + Math.min(dfs(i - 1, j - 1) - 1, dfs(i - 1, j), dfs(i, j - 1))
    } else {
      return 1 + Math.min(dfs(i - 1, j - 1) + 1, dfs(i - 1, j), dfs(i, j - 1))
    }
  }

  return dfs(word1.length - 1, word2.length - 1, 0)
}

var minDistance_error2 = function (word1, word2) {
  const dfs = (i, j) => {
    if (i === 0) return j
    if (j === 0) return i
    if (word1[i] === word2[j]) {
      return Math.min(dfs(i - 1, j - 1), dfs(i - 1, j) + 1, dfs(i, j - 1) + 1)
    } else {
      return 1 + Math.min(dfs(i - 1, j - 1), dfs(i - 1, j), dfs(i, j - 1))
    }
  }

  return dfs(word1.length - 1, word2.length - 1, 0)
}

var minDistance_dfs = function (word1, word2) {
  const dfs = (i, j) => {
    console.log(word1.substr(0, i + 1), word2.substr(0, j + 1))
    if (i === -1) return j + 1
    if (j === -1) return i + 1
    if (word1[i] === word2[j]) {
      return dfs(i - 1, j - 1)
    } else {
      return 1 + Math.min(dfs(i - 1, j - 1), dfs(i - 1, j), dfs(i, j - 1))
    }
  }

  return dfs(word1.length - 1, word2.length - 1, 0)
}

var minDistance_error_dp1 = function (word1, word2) {
  const dp = new Array(word1.length).fill(0).map(item => new Array(word2))

  for (let i = 0; i < word1.length; i++) {
    dp[i][0] = i + 1
  }

  for (let j = 0; j < word2.length; j++) {
    dp[0][j] = j + 1
  }

  for (let i = 1; i < word1.length; i++)
    for (let j = 1; j < word2.length; j++) {
      if (word1[i] === word2[j]) {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j] + 1, dp[i][j - 1] + 1)
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1])
      }
    }
}

var minDistance_error_dp2 = function (word1, word2) {
  const len1 = word1.length
  const len2 = word2.length

  if (len1 === 0) return len2
  if (len2 === 0) return len1

  const dp = new Array(len1).fill(0).map(item => new Array(word2))

  for (let i = 0; i < len1; i++) {
    dp[i][0] = i + 1
  }

  for (let j = 0; j < len2; j++) {
    dp[0][j] = j + 1
  }

  for (let i = 1; i < len1; i++)
    for (let j = 1; j < len2; j++) {
      if (word1[i] === word2[j]) {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j] + 1, dp[i][j - 1] + 1)
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1])
      }
    }

  return dp[len1 - 1][len2 - 1]
}

var minDistance = function (word1, word2) {
  const len1 = word1.length
  const len2 = word2.length

  if (len1 === 0) return len2
  if (len2 === 0) return len1

  const dp = new Array(len1 + 1).fill(0).map(item => [0])

  for (let i = 0; i <= len1; i++) {
    dp[i][0] = i
  }

  for (let j = 0; j <= len2; j++) {
    dp[0][j] = j
  }

  for (let i = 1; i <= len1; i++)
    for (let j = 1; j <= len2; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j] + 1, dp[i][j - 1] + 1)
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1])
      }
    }

  return dp[len1][len2]
}
