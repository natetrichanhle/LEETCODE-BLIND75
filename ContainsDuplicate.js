var containsDuplicate = function(nums) {
    //     brute force: a nested for loop that compares every value and if 2 values equal to eachother return true else return false;
        // let res = false;
        // for (let i = 0; i < nums.length; i++) {
        //     for (let j = i+1; j < nums.length; j++) {
        //         if (nums[i] === nums[j]) {
        //             res = true;
        //         }
        //     }
        // }
        // return res;
    //     runtime 94ms 0(n2)
        
    //     Compare the Set's size property to the array's length. Sets only contain unique values, so any duplicates get automatically removed. If the Set has the same number of values as the array, then the array doesn't have any duplicates.
        if (nums.length !== new Set(nums).size) {
            return true;
        }
        
        return false;
    };