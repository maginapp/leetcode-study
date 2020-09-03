import MyCircularQueue from '../queue/queue'

/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.queue = []
  this.queue.size = () => {
    return this.queue.length
  }
  this.queue.empty = () => {
    return !this.queue.length
  }
  this.queue.pop = () => {
    return this.queue.shift()
  }
  this.queue.feek = () => {
    return this.queue[0]
  }
}

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  let size = this.queue.size()
  let list = []
  for (let i = 0; i < size; i++) {
    list.push(this.queue.pop())
  }
  list.push(x)
  while (list.length) {
    this.queue.push(list.pop())
  }
}

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.queue.pop()
}

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queue.feek()
}

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.empty()
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

/*
 用队列实现栈
使用队列实现栈的下列操作：

push(x) -- 元素 x 入栈
pop() -- 移除栈顶元素
top() -- 获取栈顶元素
empty() -- 返回栈是否为空
注意:

你只能使用队列的基本操作-- 也就是 push to back, peek/pop from front, size, 和 is empty 这些操作是合法的。
你所使用的语言也许不支持队列。 你可以使用 list 或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
你可以假设所有操作都是有效的（例如, 对一个空的栈不会调用 pop 或者 top 操作）。

作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/queue-stack/gw7fg/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

const s = new MyStack()
s.push(1)
s.push(2)
s.top()
s.pop()
s.empty()
