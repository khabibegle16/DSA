var nums = [1,2,3,4,5,6,7]
var k = 3

for (let j = 0; j <k; j++) {
console.log(j)
  for (let i = 0; i < nums.length-1 ; i++) {
      if (!nums[i + 1]) {
          console.log(nums[i], i);
          let temp = nums[0];
          nums[0] = nums[nums.length];
          nums[nums.length] = temp;
      } else {

          let temp1 = nums[i];
          nums[i] = nums[i + 1];
          nums[i + 1] = temp1;
      }
  }
}
console.log(nums);