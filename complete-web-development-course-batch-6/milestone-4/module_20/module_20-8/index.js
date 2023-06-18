// Factorial using a while loop or a decrementing loop



// function factorial (number) {
//     let result = 1;
//     for (let i = number; i >= 1; i--) {
//         result *= i;
//     }
//     return result;
// }
// const number = 5;
// const fact = factorial(number);
// console.log('factorial of', number, 'is:', fact);


// function factorial(number) {
//     var i = 1;
//     var result = 1;
//     while(i <= number) {
//         result *= i;
//         i++;
//     }
//     return result;
// }
// console.log(factorial(5));


function factorial(number) {
    let i = number;
    let result = 1;
    while(i >= 1) {
        result *= i;
        i--;
    }
    return result;
}
console.log(factorial(5));