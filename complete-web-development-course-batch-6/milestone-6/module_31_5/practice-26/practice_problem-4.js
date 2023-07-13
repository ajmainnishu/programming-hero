// 4. [Homework] Do a little google search: javascript function declaration vs arrow function then read some articles and try to understand.



// declare function
function sumOfResult1 (num1, num2) {
    return num1 + num2;
}
const declarationFunction = sumOfResult1(5, 10);
console.log(declarationFunction);

// arrow function
const sumOfResult2 = (num1, num2) => num1 + num2;
const arrowFunction = sumOfResult2(5, 20);
console.log(arrowFunction);