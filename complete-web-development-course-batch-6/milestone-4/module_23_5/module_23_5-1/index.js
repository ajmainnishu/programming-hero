// Understand recursion using sum of numbers



// function sum(i) {
//     console.log(i);
//     return i + sum(i - 1);
// }
// const result = sum(5);
// console.log(result);


function sum(i) {
    if (i == 1) {
        return 1;
    }
    return i + sum(i - 1);
}
const result = sum(5);
console.log(result);