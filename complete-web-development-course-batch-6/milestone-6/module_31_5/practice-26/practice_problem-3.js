// practice_problem-3



// 3.1 Declare the arrow function with one parameter. And the work of that function will be if you give any input and divide that input number by 5 and give the output.
const inputMultiply = (num) => num / 5;
const result = inputMultiply(25);
console.log(result);




// 3.2 You will write an arrow function with two parameters. Inside that function will work. Adds 2 to each input parameter and then multiplies the sum by two. Try to figure out how to do it
const arrowResult = (num1, num2) => (num1 + 2) * (num2 + 2);
const result1 = arrowResult(5, 7);
console.log(result1);




// 3.3 Now declare an arrow function with three parameters. The function will take three parameters and multiply those three parameters and return the result.
const arrowMultiply = (num1, num2, num3) => num1 * num2 * num3;
const result2 = arrowMultiply(2, 4, 6);
console.log(result2);