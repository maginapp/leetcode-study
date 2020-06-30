var addBinary = function (a, b) {
  let i = 0
  const al = a.length
  const bl = b.length
  const arr = []
  let ai, bi
  while (i < al || i < bl) {
    ai = i < al ? +a[al - i - 1] : 0
    bi = i < bl ? +b[bl - i - 1] : 0
    const v = ai + bi + (arr[0] || 0)
    arr[0] = v % 2
    arr.unshift(v > 1 ? 1 : 0)
    i++
  }
  const index = arr.indexOf(1)
  if (index === -1) return '0'
  else {
    return arr.slice(index).join('')
  }
}

var addBinary = function (a, b) {
  ;(parseInt(a, 2) + parseInt(b, 2)).toString(2)
}
