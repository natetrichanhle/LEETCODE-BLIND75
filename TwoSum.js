var twoSum = function(nums, target) {
    //     we can do a nested for loop to compare every element
    //     once we find the 2 elements, push the indexes of the 2 elements into an empty array and return the array
        
        // let res = [];
        // for(let i = 0; i < nums.length; i++) {
        //     for(let j = i + 1; j < nums.length; j++) {
        //         if(nums[i] + nums[j] === target) {
        //             res.push(i,j);
        //         }
        //     }
        // }
        // return res;
        
    //     runtime 77ms
        
    //     instantiate a map
        let map = new Map;
    //     iterate through nums
        for (let i = 0; i < nums.length; i++) {
    //         instantiate a complement value to compare with values in the map
            let complement = target - nums[i]
    //         if the map has the complement value of the current index of i then return that complement index and i
            if (map.has(complement)) {
                return [map.get(complement), i];
            }
    //         inserting the number and index of every iteration inside the map
            map.set(nums[i],i);
        }
        
    //     runtime 61ms
    };