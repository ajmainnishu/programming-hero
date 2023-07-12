// practice problem 1



// 1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ]. Now convert this array into an even array (array with even numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map() method. Hints: add one to any odd number and it will become an even number.

// using for loop
const oddNumbers1 = [1, 3, 5, 7, 9];
let evenNumbers1 = [];
for (let i = 0; i < oddNumbers1.length; i++) {
    evenNumbers1.push(oddNumbers1[i] + 1);
}
console.log(evenNumbers1);

// using map method
const oddNumbers2 = [1, 3, 5, 7, 9];
const evenNumbers2 = oddNumbers2.map(number => number + 1);
console.log(evenNumbers2);




// 2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now return/get all the elements which are divisible by 10 using array.filter() method.
const numbers1 = [33, 50, 79, 78, 90, 101, 30 ];
const filterResult = numbers1.filter(number => number % 10 === 0);
console.log(filterResult);




// 3) Now do the same task of question 2. But do this using array.find() method. Then compare the output of question 2 & question 3.
const numbers2 = [33, 50, 79, 78, 90, 101, 30 ];
const findResult = numbers2.find(number => number % 10 === 0);
console.log(findResult);