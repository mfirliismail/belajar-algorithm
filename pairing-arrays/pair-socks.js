function sockMerchant(n, ar) {
    // Write your code here
    if(!ar || ar.length !== n){
        return 0
    }

    let pairsCount = 0
    let obj = {}

    for( let num of ar){
        obj[num] = obj[num] + 1 || 1
    }
    for( let num of ar){
        obj[num] = obj[num] % 2 === 0
        pairsCount += obj[num]
    }
    return pairsCount 

}

