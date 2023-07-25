// 4. map: number of array each number divide by 7 and return the array



const arr = [2, 11, 176, 15, 20, 25];
const newArr = arr.map(num => parseFloat((num / 7).toFixed(2)));
console.log(newArr);