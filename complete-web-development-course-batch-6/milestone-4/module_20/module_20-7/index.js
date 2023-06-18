// Calculate Factorial of a number using for loop



// let sum = 0;
// for (let i = 0; i <= 7; i++) {
//     sum += i;
//     console.log(sum);
// }


// function sumONumbers(number) {
//     let sum = 0;
//     for (let i = 0; i < number; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumONumbers(5));


function factorial (number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}
const result = factorial(7);
console.log(result);