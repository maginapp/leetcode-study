/**
 * @param {string} s
 * @return {string}
 */
// 只适合个位数
export var decodeString_err = function (s) {
  let index = s.indexOf(']')
  while (index != -1) {
    let sinex = s.lastIndexOf('[', index)
    s = s.substring(0, sinex - 1) + s.substring(sinex + 1, index).repeat(s[sinex - 1]) + s.substring(index + 1)
    index = s.indexOf(']')
  }
  return s
}

export var decodeString = function (s) {
  let index = s.indexOf(']')
  while (index != -1) {
    let sinex = s.lastIndexOf('[', index)
    let k = '',
      i = 0
    while (+s[sinex - i - 1] >= 0) {
      i++
      k = '' + s[sinex - i] + k
    }
    s = s.substring(0, sinex - i) + s.substring(sinex + 1, index).repeat(k) + s.substring(index + 1)
    index = s.indexOf(']')
  }
  return s
}

export var decodeString_dg = function (s) {}

export var decodeString_for = function (s) {
  let stack = [],
    num = '',
    str = ''
  for (let i of s) {
    if (i >= 0) {
      num += i
    } else if (i == '[') {
      stack.push({
        str,
        num
      })
      str = ''
      num = ''
    } else if (i == ']') {
      const data = stack.pop()
      str = data.str + str.repeat(data.num)
    } else {
      str += i
    }
  }
  return str
}

// console.log(decodeString('3[a]2[bc]'))

/*
字符串解码
给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

 

示例 1：

输入：s = "3[a]2[bc]"
输出："aaabcbc"
示例 2：

输入：s = "3[a2[c]]"
输出："accaccacc"
示例 3：

输入：s = "2[abc]3[cd]ef"
输出："abcabccdcdcdef"
示例 4：

输入：s = "abc3[cd]xyz"
输出："abccdcdcdxyz"

作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/queue-stack/gdwjv/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/
