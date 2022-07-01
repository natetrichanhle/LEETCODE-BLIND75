var getSum = function(a, b) {
    //     b is equal to 0 once there is nothing left to shift
        while (b != 0) {
    //         temp variable shifts(<<) the values where both bits are 1 and need to be shifted to the left by 1.
            let temp = (a & b) << 1
    //         xor (^) adds the bits 
            a = a ^ b;
    //         b needs to be assigned to the original value of a hence why we are using a temp variable
            b = temp;
        }
        return a;
    };