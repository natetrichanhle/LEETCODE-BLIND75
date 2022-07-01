var productExceptSelf = function(nums) {
    let leftProduct = [];
    let rightProduct = [];
    let solution = [];
    
//     populate leftProduct
    
    for (let i = 0; i < nums.length; i++) {
        if (leftProduct.length === 0){ 
            leftProduct.push(1);
        } else {
            leftProduct.push(leftProduct[i-1] * nums[i-1]);
        }
    }
    
//     populate rightProduct
    
    for (let i = nums.length-1; i > -1; i--) {
        if(rightProduct.length === 0) {
            rightProduct.push(1);
        } else {
            rightProduct.unshift(rightProduct[0] * nums[i+1]);
        }
    }
    
//     populate solution
    for (let i = 0; i < leftProduct.length; i++) {
        solution.push(rightProduct[i] * leftProduct[i]);
    }
    
    return solution;
};