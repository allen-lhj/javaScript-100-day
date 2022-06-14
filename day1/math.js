// Math.floor() 的功能是向下取整，floor意为地板，也就是对操作数取底
// Math.floor(a); 就会取小于或等于a的最大整数

Math.floor(3); // 3
 
Math.floor(3.5); // 3

Math.floor(-1); // -1

Math.floor(-1.5); // -2

Math.floor(1/2); // 0

// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，
// 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

// 输入: nums = [-1,0,3,5,9,12], target = 9     
// 输出: 4       
// 解释: 9 出现在 nums 中并且下标为 4     
// 二分查找法
var nums = [-1,0,3,5,9,12], target = 9;
let search = function(nums, target) {
  let left = 0, right = nums.length - 1;
  
  while(left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(search(nums, target))