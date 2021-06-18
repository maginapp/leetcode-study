/** * @param {number} capacity */
export var LRUCache = function (capacity) {
  this.capacity = capacity
  this.head = this.tail = {}
  this.cache = {}
  this.count = 0
}

/**  * @param {number} key * @return {number} */
LRUCache.prototype.get = function (key) {
  let obj = this.getCache(key)
  return obj ? obj.val : -1
}

LRUCache.prototype.getCache = function (key) {
  let obj = this.cache[key]
  if (obj && this.tail !== obj) {
    const next = obj.next
    const prev = obj.prev

    prev.next = next
    next.prev = prev

    this.tail.next = obj
    obj.prev = this.tail
    obj.next = null
    this.tail = obj
  }
  return obj
}

// [1] 1
// [1, 2] 1
// [1, 2, 3] 1
// [1, 2, 3] 1 => 2
// 每次添加计算最小值
// 值的使用数 + 1

/**  * @param {number} key  * @param {number} value * @return {void} */
LRUCache.prototype.put = function (key, value) {
  let cached = this.getCache(key)
  if (cached) {
    cached.val = value
    return null
  } else {
    if (this.count === this.capacity) {
      const obj = this.head.next
      if (obj.next) {
        this.head.next = obj.next
        obj.next.prev = this.head
      }
      obj.prev = obj.next = null
      delete this.cache[obj.key]
    } else {
      this.count++
    }
    const obj = {
      key: key,
      val: value,
      prev: this.tail
    }
    this.cache[key] = obj
    this.tail.next = obj
    this.tail = obj
    return null
  }
}

// const lru = new LRUCache(2)
// lru.put(1, 1)
// lru.put(2, 2)
// lru.get(1)
// lru.put(3, 3)
// console.log(lru.get(2))
// lru.put(4, 4)
// lru.get(1)
// lru.get(3)
// lru.get(4)

// const example = [
//   // [
//   //   ['LRUCache', 'put', 'put', 'get', 'put', 'get', 'put', 'get', 'get', 'get'],
//   //   [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]],
//   //   [null, null, null, 1, null, -1, null, -1, 3, 4]
//   // ],
//   [
//     ['LRUCache', 'put', 'put', 'put', 'put', 'get', 'get', 'get', 'get', 'put', 'get', 'get', 'get', 'get', 'get'],
//     [[3], [1, 1], [2, 2], [3, 3], [4, 4], [4], [3], [2], [1], [5, 5], [1], [2], [3], [4], [5]]
//   ]
// ]
// /* eslint-enable */

// example.forEach(item => {
//   // var lruFn = new Function('return new ' + item[0][0] + '(' + item[1][0] + ')')
//   // var lru = lruFn()
//   var lru = new LRUCache(...item[1][0])
//   var ans = [null]
//   for (let i = 1; i < item[0].length; i++) {
//     let result = lru[item[0][i]](...item[1][i])
//     ans.push(result)
//   }
//   console.log(ans)
// })

// console.log('end')

/** * Your LRUCache object will be instantiated and called as such: * var obj = new LRUCache(capacity) * var param_1 = obj.get(key) * obj.put(key,value) */

/*
运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。
实现 LRUCache 类：

LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 

进阶：你是否可以在 O(1) 时间复杂度内完成这两种操作？

 

示例：

输入
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
输出
[null, null, null, 1, null, -1, null, -1, 3, 4]

解释
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4
 

提示：

1 <= capacity <= 3000
0 <= key <= 3000
0 <= value <= 104
最多调用 3 * 10 ** 4 次 get 和 put

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/lru-cache
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
