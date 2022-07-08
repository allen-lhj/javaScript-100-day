/**
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 * 示例 1： 输入：nums = [-4,-1,0,3,10] 输出：[0,1,9,16,100] 解释：平方后，数组变为 [16,1,0,9,100]，
 * 排序后，数组变为 [0,1,9,16,100]
 * 示例 2： 输入：nums = [-7,-3,2,3,11] 输出：[4,9,9,49,121]
 * 
 */
 var nums = [-4,-1,0,3,10]
// 因为数组按照顺序排列，虽然有负有正，但是最大的数一定是在两端，所以考虑双指针法
// 设置i为起始索引，j为数组末尾索引，k为res数组末尾索引（res数组是从后向前往里填数，也就是先填大的）
// 每次对比如果左侧比右边大，起始索引+1，左侧的值赋值给数组res末尾k--
// 对比右侧比左侧大，末尾索引-1， 右侧的值赋值给res，k--
var sortedSquare = function(nums) {
  let n = nums.length;
  var res = new Array(n).fill(0);
  let i = 0, j = n - 1, k = n - 1;
  while(i <= j) {
    left = nums[i] * nums[i];
    right = nums[j] * nums[j];
    if (left < right) {
      res[k--] = right;
      j--
    } else {
      res[k--] = left;
      i++;
    }
  }
  return res;
}
// console.log(sortedSquare(nums))
// 暴力解法。每个元素平方后，排序
var Solution = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] *= nums[i]
  }
  nums.sort((a, b) => a - b)
  return nums
}

console.log(Solution(nums))

