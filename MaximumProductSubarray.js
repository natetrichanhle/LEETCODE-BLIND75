var maxProduct = function(nums) {
    let currMax = nums[0], currMin = nums[0], finalMax = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        let temp = currMax;
        
        currMax = Math.max(Math.max(currMax * nums[i], currMin * nums[i]), nums[i]);
        currMin = Math.min(Math.min(temp * nums[i], currMin * nums[i]), nums[i]);
        finalMax = Math.max(currMax, finalMax);
    }
    return finalMax;
};