// 6. [ Challenging. Search Google ] Use filter to extract only odd numbers from an array of many numbers



const arr = [1, 6, 2, 4, 3, 5, 11, 51, 100, 99, 71];
const oddNumbers = arr.filter(num => (num % 2) !== 0);
console.log(oddNumbers); 