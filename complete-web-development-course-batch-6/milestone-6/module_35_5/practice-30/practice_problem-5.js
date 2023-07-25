// 5. difference between map, forEach, filter, find, reduce




// map
const arr = [2, 11, 176, 15, 20, 25];
const newArr = arr.map(num => parseFloat((num / 7).toFixed(2)));
console.log(newArr);




// forEach
const arr1 = [2, 11, 176, 15, 20, 25];
arr1.forEach(num => console.log(parseFloat((num / 7).toFixed(2))));




// filter
const arr2 = [2, 11, 176, 15, 20, 25, 101, 105];
const resultArr2 = arr2.filter(num => num > 100);
console.log(resultArr2);




// find
const arr3 = [2, 11, 176, 15, 20, 25, 101, 105];
const resultArr3 = arr2.find(num => num > 100);
console.log(resultArr3);




const arr4 = [2, 11, 176, 15, 20, 25, 101, 105];
const resultArr4 = arr4.reduce((previous, current) => previous + current, 0);
console.log(resultArr4);