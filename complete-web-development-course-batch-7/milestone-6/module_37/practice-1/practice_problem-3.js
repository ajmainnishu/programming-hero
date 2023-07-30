// Practice Problem 3



/* Write an arrow function that will take 3 parameters (first two parameters will be numbers and the third
    parameter will be a string) that will perform arithmetic operation depending on the third parameter and
    will print the result. For example:
    1. Print result of num1+num2 if operation is “add”
    2. Print result of num1-num2 if operation is “subtract”
    3. Print result of num1*num2 if operation is “multiply”
    4. Print result of num1/num2 if operation is “divide”
    5. Print result of num1%num2 if operation is “modulus”
    6. Else print “Invalid operation”
 */
    const arrowFunction = (num1, num2, value) => {
        if (value === 'add') {
            console.log(num1 + num2);
        } else if (value === 'subtract') {
            console.log(num1 - num2);
        } else if (value === 'multiply') {
            console.log(num1 * num2);
        } else if (value === 'divide') {
            console.log(num1 / num2);
        } else if (value === 'modulus') {
            console.log(num1 % num2);
        } else {
            console.log('Invalid operation');
        }
    }
    arrowFunction(10, 5, 'add');