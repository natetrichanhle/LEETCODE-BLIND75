var maxSubArray = function(nums) {
    let current = nums[0];
    let global = nums[0];
    for (let i = 1; i < nums.length; i++) {
        current = Math.max(nums[i], current + nums[i]);
        global = Math.max(global, current);
    }
    return global;
};