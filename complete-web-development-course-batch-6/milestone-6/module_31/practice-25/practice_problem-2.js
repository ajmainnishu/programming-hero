// 1) You have an array [ 1, 9, 17, 22 ]. Add the all elements of this array and give output. Do this using for loop & array.reduce() method.



// using for loop
const numbers1 = [1, 9, 17, 22 ];
let sum = 0;
for (let i = 0; i < numbers1.length; i ++) {
    sum = sum + numbers1[i];
}
console.log(sum);

// using reduce method
const numbers2 = [1, 9, 17, 22 ];
const reduceResult = numbers2.reduce((previous, current) => previous + current, 0);
console.log(reduceResult);