/*

给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组，并返回其长度。如果不存在符合条件的连续子数组，返回 0。

示例: 

输入: s = 7, nums = [2,3,1,2,4,3]
输出: 2
解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
进阶:

如果你已经完成了O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。
*/


/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let arr = [], min = Infinity, count = 0
    for (let i = 0; i < nums.length; i++) {
        arr.push(nums[i])
        count += nums[i]
        while (count >= s) {
            min = Math.min(arr.length, min)
            count -= arr.shift()
        }
    }
    return min === Infinity ? 0 : min
};


/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let start = 0, min = 0, count = 0
    for (let i = 0; i < nums.length; i++) {
        count += nums[i]
        while (count >= s) {
            min = min === 0 ? i - start + 1 : Math.min(i - start + 1, min)
            count -= nums[start]
            start++
        }
    }
    return min
};


export default minSubArrayLen
