let sum = 7;
let nums = [2,3,1,2,4,3];

// 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s
// 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。
// 示例：
// 输入：s = 7, nums = [2,3,1,2,4,3] 输出：2 解释：子数组 [4,3] 是该条件下的长度最小的子数组。

let solution = function(s, nums) {
  let result = 0;// 累加的结果
  let len = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0; // 子数组之和
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum >= s) {
        len = j - i + 1; // 取子序列的长度
        if (result) {
          result = result < len ? result : len;
        } else {
          result = len;
        }
        break
      }
    }
  }
  return result;
}

var minSubArrayLen = function(target, nums){
  let len = nums.length;
  let result = len + 1;
  let l = r = sum = 0;

  while (l < len) {
    sum += nums[r++];
    // 窗口滑动
    while(sum > target) {
      result  = result < r - l ? result : r - 1;
      sum -= nums[l++]
    }
  }
  return result > len ? len : result;
}

console.log(solution(sum, nums))