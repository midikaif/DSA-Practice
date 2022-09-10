    // function maxProfit(arr) {
    //     let maxProfit = 0;
    //     let priceTillNow = arr[0];
    //     for(let value of arr) {
    //         if(value > priceTillNow) {
    //             maxProfit+=value - priceTillNow;
    //         }
    //         priceTillNow = value;
    //     }
    //     return maxProfit;
    // }

    // console.log(maxProfit([100, 180, 260, 310, 40, 535, 695]))

// ------------------------------------

    // let arr = [100,180,260,310,40,535,695]
    //     let n = arr.length;
    //     let maxProfit = 0, buy, sell;
    //     buy = arr[0];
    //     for(let i = 0; i<n; i++){
    //         if(arr[i]>arr[i+1] || arr[i+1] === undefined){
    //             maxProfit += arr[i] - buy;
    //             buy = arr[i+1];
    //         }
    //     }

    //     console.log(maxProfit)