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

// Second attempt

var productExceptSelf = function(nums) {
    //     initilize left side and set the first index to 1
        const left = new Array(nums.length).fill(0);
        left[0] = 1;
    //     initialize right side and set the last index to 1
        const right = new Array(nums.length).fill(0);
        right[right.length-1] = 1;
        
    //     get the products for the left side with i starting at the 2nd index because we already have the value for the first index.
        for (let i = 1; i < nums.length; i++) {
            left[i] = nums[i-1] * left[i-1];
        }
        
    //     get products for the right side with i starting at the 2nd to last value because we already have a value for the last index.
        for (let i = nums.length - 2; i >= 0; i--) {
            right[i] = nums[i+1] * right[i+1];
        }
        
    //     combine the right and left side.
        for (let i = 0; i < nums.length; i++) {
            nums[i] = left[i] * right[i];
        }
        
        return nums;
    };