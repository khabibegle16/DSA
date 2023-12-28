var nums = [1, 2, 3, 4, 5];

console.log(nums.length)

// nums.map((item,i)=>{
for (let i = 0; i < nums.length-1; i++) {
  if (!nums[i + 1]) {
    console.log(nums[i],i);
    let temp = nums[0];
    nums[0] = nums[nums.length];
    nums[nums.length] = temp;
  } else {
    console.log(nums[i], nums[i + 1],i);
    let temp1 = nums[i];
    nums[i] = nums[i + 1];
    nums[i + 1] = temp1;
  }
}
// })

console.log(nums);
