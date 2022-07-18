var countBits = function(n) {
    let output = [];
    
    for(let i = 0; i <= n; i++) {
        output.push(i.toString(2).split('1').length-1);
    }
    
    return output;
};