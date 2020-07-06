/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
const findLadders = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return []
  const len = wordList.length
  const lenW = beginWord.length
  const result = []
  const map = {}
  searchNext(beginWord, [])

  function judgeWord(beginWord, waitWord) {
    let i = 0
    let count = 0
    if (!map[beginWord]) {
      let flag = ''
      while (i < lenW) {
        if (beginWord[i] == endWord[i]) flag += i
        i++
      }
      map[beginWord] = flag
    }
    while (i < lenW) {
      if (beginWord[i] != waitWord[i]) count++
      if (count > 1) return false
      i++
    }
    return map[beginWord] || true
  }

  function searchNext(beginWord, searchedArr) {
    for (let i = 0; i < len; i++) {
      const waitWord = wordList[i]
      if (waitWord != beginWord && !searchedArr.includes(waitWord) && judgeWord(beginWord, waitWord)) {
        // 继续搜索
        if (waitWord === endWord) {
          const arr = [...searchedArr, beginWord, waitWord]
          if (arr.length === 5) result.push(arr)
        } else {
          searchNext(waitWord, [...searchedArr, beginWord])
        }
      }
    }
  }
  return result
}

export default findLadders
