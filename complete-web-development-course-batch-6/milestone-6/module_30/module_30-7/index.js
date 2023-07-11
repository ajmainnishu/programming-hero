// Spread operator, array max, copy arrays



// const numbers = [12, 85, 999, 78];
// console.log(...numbers);




// const numbers = [12, 85, 999, 78];
// const largest = Math.max(...numbers);
// console.log(largest);




// const numbers = [12, 85, 999, 78];
// const numbers2 = numbers;
// numbers2.push(111);
// console.log(numbers, numbers2);


// const numbers = [12, 85, 999, 78];
// const numbers2 = [numbers];
// numbers2.push(111);
// console.log(numbers, numbers2);


// const numbers = [12, 85, 999, 78];
// const numbers2 = [...numbers];
// numbers2.push(111);
// console.log(numbers, numbers2);


const numbers = [12, 85, 999, 78];
const numbers2 = [444, 78, ...numbers, 777, 33];
numbers2.push(111);
console.log(numbers, numbers2);