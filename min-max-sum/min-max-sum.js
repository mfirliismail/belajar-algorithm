function miniMaxSum(arr) {

    let data = arr;

// sort first
data = data.sort();
  
// to get the sets only
let maxSet = data.slice(1);
let minSet = data.slice(0, -1);

console.log(minSet, maxSet);

// to get just the max/min value
const sum = data.reduce((a, total) => a + total, 0);
console.log(sum - data[data.length - 1], sum - data[0]);
  }
// arr = [1, 2, 3]

miniMaxSum(1, 2, 3 ,4)