// 10. Write a function with three parameters. The function will take three parameters and return the sum of those three parameters. And the third parameter will have a default value. That would be 7.



function sum(num1, num2, num3 = 7) {
    return num1 + num2 + num3;
}
const sumOfFunction = sum (2, 5);
console.log(sumOfFunction);