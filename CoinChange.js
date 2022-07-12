var coinChange = function(coins, amount) {
    //     initializing a table with the amount + 1 to account for the 0th index and fill(Infinity) to account for the Math.min (no matter how high the number is it will give us the correct value)
        const table = new Array(amount + 1).fill(Infinity);
        table[0] = 0;
        
        for (let coin of coins) {
            for(let i = 0; i < table.length; i++) {
                if (coin <= i) {
                    let idx =  i - coin;
                    let potentialAmt = table[idx] + 1;
                    table[i] = Math.min(potentialAmt, table[i]);
                }
            }
        }
        return table[table.length - 1] === Infinity ? -1 : table[table.length - 1];
    };