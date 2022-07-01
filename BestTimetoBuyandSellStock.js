var maxProfit = function(prices) {
    //     we can use a nested for loop to compare the values
    //     if the current value is less than the next values, keep track of it 
    //     return the one with the greatest difference
        // let res = [];
        // for (let i = 0; i < prices.length; i++) {
        //     for (let j = i + 1; j < prices.length; j++) {
        //         if (prices[i] < prices[j]) {
        //             res.push(prices[j] - prices[i]);
        //         } 
        //     }
        // }
        // return Math.max(...res);
        
        // let sell = 0;
        // for (let i = 0; i < prices.length; i++) {
        //   for (let j = i + 1; j < prices.length; j++){
        //       if(prices[i] < prices[j] && prices[j] - prices[i] > sell) {
        //           sell = prices[j] - prices[i];
        //       }
        //   }
        // }
        // return sell;
        
    //     instantiate the maxProfit to 0 to return it at the end if no conditions are met.
        let maxProfit = 0;
    //     the minimum price starts at the first index 
        let minPrice = prices[0];
    //     loop through the prices array starting at index 1 as the selling price
        for (let sell = 1; sell < prices.length; sell++) {
            let sellPrice = prices[sell];
    //         to get profit you have to find the difference between the minPrice and the sellPrice
            let profit = sellPrice - minPrice;
    //         if the profit is greater than the maxProfit, replace the value of the maxProfit with the profit value
            maxProfit = Math.max(maxProfit, profit);
    //         to calculate the profit for other values, check to see if the current value (sellPrice) is less than the minPrice value. If it is, set the current value (sellPrice) to the minPrice
            if(sellPrice < minPrice) minPrice = sellPrice;
        }
        return maxProfit;
        
    //     runtime 53ms 0(n)
    }; 