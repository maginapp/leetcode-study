/**
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

 
示例 1：

输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
示例 2：

输入：nums = [0,1,0,3,2,3]
输出：4
示例 3：

输入：nums = [7,7,7,7,7,7,7]
输出：1
 

提示：

1 <= nums.length <= 2500
-104 <= nums[i] <= 104
 

进阶：

你可以设计时间复杂度为 O(n2) 的解决方案吗？
你能将算法的时间复杂度降低到 O(n log(n)) 吗?

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-increasing-subsequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var lengthOfLIS = function(nums) {
  //一般递归和最值问题都适合dp求解；
  //如何验证？最优子结构验证，当问题的规模由小变大的时候，是可以根据小问题计算得出解；
  //在计算一个比较大的问题时，往往需要重复计算更小的问题，就存在重叠子问题了；
 
  //定义状态：一般简单的都可以根据小规模直接定义，难点的就比较淫秽；定义状态属于dp的定海神针；
  //定义状态要有两个意识：1.最后一步是什么；2.化成子问题；
  //如果状态没定义正确，绝对是写不出正确的转移方程的；
  //dp[i] 表示以 nums[i] 结尾的最长上升子序列；

  //状态转移方程：
  //这道题比较直观，当问题的规模逐渐变大时候，取以 nums[i] 结尾的最长上升子序列集合最大值就可以了；
  //也就是以nums[i]结尾，不断的去找前面比自己小的，这样就总能找出最长的了   
  //就是不断的找前面比自己小的数，然后加1，比较；所有状态转移方程为：
  //dp[i] = max(dp[i], dp[j] + 1); j < i

  //到这里，还需要确定一个边界和初始值
  //边界就是dp[n]，初始值就是1，因为本身自己长度就是1嘛；
  let n = nums.length
  if(!n) return 0;
  let dp = new Array(n).fill(1)
  for(let i = 1; i < n; i++){
    //我们需要找前面比自己小的；
    for(let j = 0; j < i; j++){
        if(nums[i] > nums[j]){
          dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    } 
  }
  return Math.max(...dp) 
};

作者：w1GAPZyYT7
链接：https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/fu-he-ren-lei-si-wei-de-dp-by-w1gapzyyt7/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法二： 贪心 + 二分法
var lengthOfLIS = function (nums) {
  let len = 1,
    n = nums.length
  if (n === 0) return 0
  let d = [] // index 1 开始，收录了对应当前长度的最小值
  d[len] = nums[0]
  for (let i = 1; i < n; ++i) {
    // num[i] 超出最长长度 对应的值，直接增加
    if (nums[i] > d[len]) {
      // nums[i] > d[len](nums[i - 1] || nums[0])
      d[++len] = nums[i] // dp[len + 1] = nums[i]
    } else {
      // 匹配 num[i] 对应的位置
      let l = 1,
        r = len,
        pos = 0 // 如果找不到说明所有的数都比 nums[i] 大，此时要更新 d[1]，所以这里将 pos 设为 0
      while (l <= r) {
        let mid = (l + r) >> 1
        if (d[mid] < nums[i]) {
          pos = mid
          l = mid + 1
        } else {
          r = mid - 1
        }
      }
      d[pos + 1] = nums[i]
    }
  }
  return len
}

// 作者：zn_
// 链接：https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/liang-chong-jie-ti-fang-fa-chao-99-by-zn-9712/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
