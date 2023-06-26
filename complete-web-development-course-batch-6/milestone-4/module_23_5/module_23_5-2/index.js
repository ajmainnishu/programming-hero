// Explore Factorial Recursion using a for loop concept



// let factorial = 1;
// for (let i = 5; i >= 1; i--) {
//     factorial *= i;
// }
// console.log(factorial);


function factorial(i) {
    if (i == 1) {
        return 1;
    }
    return i * factorial(i - 1);
}
const result = factorial(5);
console.log(result);