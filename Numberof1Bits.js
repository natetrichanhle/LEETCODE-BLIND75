n = 00000000000000000000000000001011

var hammingWeight = function(n) {
    // converts the binary bits into a string.
    n = n.toString(2);
    let output = 0;
    for (let i = 0; i < n.length; i++) {
        if (n[i] === '1') {
            output ++ ;
        }
    }
    return output;
};

console.log(hammingWeight(n));