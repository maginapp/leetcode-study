/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
 */

function ListNode(val) {
  this.val = val
  this.next = null
}

const l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(5)

const l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const getNum = l1 => {
    let str = ''
    while (l1) {
      str = l1.val + str
      l1 = l1.next
    }
    return str
  }
  const n1 = getNum(l1)
  const n2 = getNum(l2)
  let i = 0
  let list = new ListNode()
  let str = ''
  let res = 0,
    val,
    l1l = n1.length,
    l2l = n2.length
  let data = list
  while (i < l1l && i < l2l) {
    i++
    val = +n1[l1l - i] + +n2[l2l - i] + res
    res = val >= 10 ? 1 : 0
    data.next = new ListNode(val % 10)
    data = data.next
  }
  while (i < l1l) {
    i++
    val = +n1[l1l - i] + res
    res = val >= 10 ? 1 : 0
    data.next = new ListNode(val % 10)
    data = data.next
  }
  while (i < l2l) {
    i++
    val = +n2[l2l - i] + res
    res = val >= 10 ? 1 : 0
    data.next = new ListNode(val % 10)
    data = data.next
  }
  if (res) {
    data.next = new ListNode(res)
  }
  return list.next
}

var addTwoNumbers = function (l1, l2) {
  let data = new ListNode()
  let res = 0,
    val,
    list = data
  while (l1 || l2) {
    val = l1 ? l1.val : 0 + l2 ? l2.val : 0 + res
    list.next = new ListNode(val % 10)
    res = val < 10 ? 0 : 1
    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
    list = list.next
  }
  if (res) {
    list.next = new ListNode(res)
  }
  return data.next
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let node = new ListNode('head')
  let temp = node //哑结点
  let add = 0 //是否进一
  let sum = 0 //新链表当前未取余的值 = 链表1值 + 链表2值 + add;

  //遍历，直到最长的都为空
  while (l1 || l2) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add
    temp.next = new ListNode(sum % 10) //取余则为新链表的值
    temp = temp.next
    add = sum >= 10 ? 1 : 0
    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
  }
  add && (temp.next = new ListNode(add))
  return node.next
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  const data = new ListNode()
  let res = 0,
    val,
    list = data
  while (l1 || l2) {
    val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + res
    list.next = new ListNode(val % 10)
    res = val < 10 ? 0 : 1
    list = list.next
    l2 && (l2 = l2.next)
    l1 && (l1 = l1.next)
  }
  if (res) {
    list.next = new ListNode(res)
  }
  return data.next
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  const data = new ListNode()
  let res = 0,
    val,
    list = data
  while (l1 && l2) {
    val = l1.val + l2.val + res
    list.next = new ListNode(val % 10)
    res = val < 10 ? 0 : 1
    list = list.next
    l2 = l2.next
    l1 = l1.next
  }
  l1 = l1 || l2
  l2 = null
  while (l1) {
    val = l1.val + res
    list.next = new ListNode(val % 10)
    res = val < 10 ? 0 : 1
    list = list.next
    l1 = l1.next
  }
  if (res) {
    list.next = new ListNode(res)
  }
  return data.next
}
