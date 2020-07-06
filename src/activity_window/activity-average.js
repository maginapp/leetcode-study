/*
m = new MovingAverage(3);
m.next(1) = 1
m.next(10) = (1 + 10) / 2
m.next(3) = (1 + 10 + 3) / 3
m.next(5) = (10 + 3 + 5) / 3
*/

export default class MovingAverage {
  constructor(num) {
    this.arr = new Array(num)
    this.size = 0
    this.length = num
  }
  next(val) {
    if (this.size < this.length) {
      this.arr[this.size] = val
      this.size++
    } else {
      this.arr.shift()
      this.arr.push(val)
    }
    return this.getAva()
  }
  getAva() {
    return this.arr.reduce((pre, item) => pre + item, 0) / this.size
  }
}
