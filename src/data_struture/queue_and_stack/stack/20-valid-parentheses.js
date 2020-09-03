/*
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {boolean}
 */
export var isValid_72 = function (s) {
  if (!s.length) return true
  const list = s.split('')
  const stack = []
  const map = {
    '{': '}',
    '(': ')',
    '[': ']'
  }
  while (list.length) {
    const str = list.shift()
    if (stack.length && str === map[stack[stack.length - 1]]) {
      stack.pop()
    } else {
      stack.push(str)
    }
  }
  return !stack.length
}

export var isValid = function (s) {
  if (!s.length) return true
  if (s.length % 2) return false
  const stack = []
  let i = 0
  while (i < s.length) {
    const str = s[i]
    let head
    switch (str) {
      case '[':
      case '{':
      case '(':
        stack.push(str)
        break
      case ')':
        head = stack.pop()
        if (head !== '(') return false
        break
      case '}':
        head = stack.pop()
        if (head !== '{') return false
        break
      case ']':
        head = stack.pop()
        if (head !== '[') return false
        break
    }
    i++
  }
  return !stack.length
}

// isValid('()')
