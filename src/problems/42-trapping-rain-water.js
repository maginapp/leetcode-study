/**
 * @param {number[]} height
 * @return {number}
 */
export var trap = function (height) {
  let leftIndex = -1
  const len = height.length
  // const list = []
  let count = 0
  let cache = []
  for (let i = 0; i < len; i++) {
    if (height[i]) {
      if (leftIndex === -1 || (leftIndex !== -1 && height[i] >= height[leftIndex])) {
        leftIndex = i
        cache.push(i)
        if (cache.length === 2) {
          if (cache[1] - cache[0] > 1) {
            // list.push(cache)
            count += getData(height, cache[0], cache[1], height[cache[0]])
          }
          if (i < len - 2) {
            cache = [i]
          } else {
            cache = []
          }
        }
      }
    }
  }
  // console.log(list)
  if (cache.length) {
    cache = []
    let rightIndex = -1
    for (let i = len - 1; i >= leftIndex; i--) {
      if (height[i]) {
        if (rightIndex === -1 || (rightIndex !== -1 && height[i] >= height[rightIndex])) {
          rightIndex = i
          cache.unshift(i)
          if (cache.length === 2) {
            if (cache[1] - cache[0] > 1) {
              // list.push(cache)
              count += getData(height, cache[0], cache[1], height[cache[1]])
            }
            cache = [i]
          }
        }
      }
    }
  }
  // console.log(list)

  // console.log(count)
  return count
}

const getData = (heigt, a, b, start) => {
  let i = 1
  let count = 0
  while (a + i < b) {
    count += start - heigt[a + i]
    i++
  }

  // console.log(count)
  return count
}

export var trap2 = function (height) {
  const len = height.length
  let left = [0]
  let right = []
  right[len - 1] = 0
  let sum = 0
  for (let i = 1; i <= len - 2; i++) {
    left[i] = Math.max(height[i - 1], left[i - 1])
  }
  for (let i = len - 2; i >= 1; i--) {
    right[i] = Math.max(height[i + 1], right[i + 1])
  }
  // console.log(left, right)
  for (let i = 1; i <= len - 2; i++) {
    let deep = Math.min(left[i], right[i])
    // console.log(deep)
    if (deep > height[i]) {
      sum += deep - height[i]
    }
  }
  return sum
}

export var trap3 = function (height) {
  const len = height.length
  let left = 0
  let right = []
  right[len - 1] = 0
  let sum = 0
  for (let i = len - 2; i >= 1; i--) {
    right[i] = Math.max(height[i + 1], right[i + 1])
  }
  for (let i = 1; i <= len - 2; i++) {
    left = Math.max(height[i - 1], left)
    let deep = Math.min(left, right[i])
    if (deep > height[i]) {
      sum += deep - height[i]
    }
  }
  return sum
}

// height[leftIndex - 1]  ===> 会调整为left
// height[rightIndex + 1]  ===> 会调整为right
// height[leftIndex - 1] < height[rightIndex + 1] 左侧小，从此计算
// height[leftIndex - 1] > height[rightIndex + 1] 右侧小，从此计算

export var trap4 = function (height) {
  const len = height.length
  let sum = 0

  let left = 0
  let leftIndex = 1
  let right = 0
  let rightIndex = len - 2
  for (let i = 1; i <= len - 2; i++) {
    left = Math.max(left, height[leftIndex - 1])
    right = Math.max(right, height[rightIndex + 1])
    if (height[leftIndex - 1] <= height[rightIndex + 1]) {
      if (height[leftIndex] < left) {
        sum += left - height[leftIndex]
      }
      leftIndex++
    } else if (height[leftIndex - 1] > height[rightIndex + 1]) {
      if (height[rightIndex] < right) {
        sum += right - height[rightIndex]
      }
      rightIndex--
    }
  }
  return sum
}

export var trap6 = function (height) {
  const getData = (heigt, a, b, start) => {
    let i = 1
    let count = 0
    while (a + i < b) {
      count += start - heigt[a + i]
      i++
    }
    return count
  }
  let leftIndex = -1
  const len = height.length
  // const list = []
  let count = 0
  let cache = []
  for (let i = 0; i < len; i++) {
    if (height[i]) {
      if (leftIndex === -1 || (leftIndex !== -1 && height[i] >= height[leftIndex])) {
        leftIndex = i
        cache.push(i)
        if (cache.length === 2) {
          if (cache[1] - cache[0] > 1) {
            // list.push(cache)
            count += getData(height, cache[0], cache[1], height[cache[0]])
          }
          if (i < len - 2) {
            cache = [i]
          } else {
            cache = []
          }
        }
      }
    }
  }
  // console.log(list)
  if (cache.length) {
    cache = []
    let rightIndex = -1
    for (let i = len - 1; i >= leftIndex; i--) {
      if (height[i]) {
        if (rightIndex === -1 || (rightIndex !== -1 && height[i] >= height[rightIndex])) {
          rightIndex = i
          cache.unshift(i)
          if (cache.length === 2) {
            if (cache[1] - cache[0] > 1) {
              // list.push(cache)
              count += getData(height, cache[0], cache[1], height[cache[1]])
            }
            cache = [i]
          }
        }
      }
    }
  }
  // console.log(list)

  // console.log(count)
  return count
}

export var trap5 = function (height) {
  let leftIndex = -1
  const len = height.length
  let count = 0
  let waitIndex = -1
  for (let i = 0; i < len; i++) {
    if (height[i]) {
      if (leftIndex === -1 || (leftIndex !== -1 && height[i] >= height[leftIndex])) {
        leftIndex = i
        if (waitIndex === -1) {
          waitIndex = i
        } else {
          if (i - waitIndex > 1) {
            count += getData(height, waitIndex, i, height[waitIndex])
          }
          if (i < len - 2) {
            waitIndex = i
          } else {
            waitIndex = -1
          }
        }
      }
    }
  }
  if (waitIndex != -1) {
    waitIndex = -1
    let rightIndex = -1
    for (let i = len - 1; i >= leftIndex; i--) {
      if (height[i]) {
        if (rightIndex === -1 || (rightIndex !== -1 && height[i] >= height[rightIndex])) {
          rightIndex = i
          if (waitIndex === -1) {
            waitIndex = i
          } else {
            if (waitIndex - i > 1) {
              count += getData(height, i, waitIndex, height[waitIndex])
            }
            waitIndex = i
          }
        }
      }
    }
  }
  return count
}

// trap6([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
// trap5([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
// trap6([4, 2, 3])
// trap5([4, 2, 3])

// console.log(1)

export var trap7 = function (height) {
  let leftIndex = -1
  const len = height.length
  // const list = []
  let count = 0
  let cache = []
  for (let i = 0; i < len; i++) {
    if (height[i]) {
      if (leftIndex === -1 || (leftIndex !== -1 && height[i] >= height[leftIndex])) {
        leftIndex = i
        cache.push(i)
        if (cache.length === 2) {
          if (cache[1] - cache[0] > 1) {
            // list.push(cache)
            count += getData(height, cache[0], cache[1], height[cache[0]])
          }
          if (i < len - 2) {
            cache = [i]
          } else {
            cache = []
          }
        }
      }
    }
  }
  // console.log(list)
  if (cache.length) {
    cache = []
    let rightIndex = -1
    for (let i = len - 1; i >= leftIndex; i--) {
      if (height[i]) {
        if (rightIndex === -1 || (rightIndex !== -1 && height[i] >= height[rightIndex])) {
          rightIndex = i
          cache.unshift(i)
          if (cache.length === 2) {
            if (cache[1] - cache[0] > 1) {
              // list.push(cache)
              count += getData(height, cache[0], cache[1], height[cache[1]])
            }
            cache = [i]
          }
        }
      }
    }
  }
  function getData(heigt, a, b, start) {
    let i = 1
    let count = 0
    while (a + i < b) {
      count += start - heigt[a + i]
      i++
    }

    // console.log(count)
    return count
  }
  return count
}

export var trap8 = function (height) {
  let leftIndex = -1
  const len = height.length
  let count = 0
  let waitIndex = -1
  for (let i = 0; i < len; i++) {
    if (height[i]) {
      if (height[i] >= height[leftIndex] || leftIndex === -1) {
        // if (leftIndex === -1 || (leftIndex !== -1 && height[i] >= height[leftIndex])) {
        leftIndex = i
        if (waitIndex === -1) {
          waitIndex = i
        } else {
          if (i - waitIndex > 1) {
            count += getData(height, waitIndex, i, height[waitIndex])
          }
          if (i < len - 2) {
            waitIndex = i
          } else {
            waitIndex = -1
          }
        }
      }
    }
  }
  if (waitIndex != -1) {
    waitIndex = -1
    let rightIndex = -1
    for (let i = len - 1; i >= leftIndex; i--) {
      if (height[i]) {
        if (height[i] >= height[rightIndex] || rightIndex === -1) {
          //  if (rightIndex === -1 || (rightIndex !== -1 && height[i] >= height[rightIndex])) {
          rightIndex = i
          if (waitIndex === -1) {
            waitIndex = i
          } else {
            if (waitIndex - i > 1) {
              count += getData(height, i, waitIndex, height[waitIndex])
            }
            waitIndex = i
          }
        }
      }
    }
  }
  return count
}

export var trap9 = function (height) {
  let leftIndex = -1
  const len = height.length
  let count = 0
  let waitIndex = -1
  for (let i = 0; i < len; i++) {
    if (height[i]) {
      if (leftIndex === -1 || (leftIndex !== -1 && height[i] >= height[leftIndex])) {
        leftIndex = i
        if (waitIndex === -1) {
          waitIndex = i
        } else {
          if (i - waitIndex > 1) {
            count += getData(height, waitIndex, i, height[waitIndex])
          }
          if (i < len - 2) {
            waitIndex = i
          } else {
            waitIndex = -1
          }
        }
      }
    }
  }
  if (waitIndex != -1) {
    waitIndex = -1
    let rightIndex = -1
    for (let i = len - 1; i >= leftIndex; i--) {
      if (height[i]) {
        if (rightIndex === -1 || (rightIndex !== -1 && height[i] >= height[rightIndex])) {
          rightIndex = i
          if (waitIndex === -1) {
            waitIndex = i
          } else {
            if (waitIndex - i > 1) {
              count += getData(height, i, waitIndex, height[waitIndex])
            }
            waitIndex = i
          }
        }
      }
    }
  }

  function getData(heigt, a, b, start) {
    let i = 1
    let count = 0
    while (a + i < b) {
      count += start - heigt[a + i]
      i++
    }

    // console.log(count)
    return count
  }
  return count
}
