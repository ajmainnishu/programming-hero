// practice_problem-1



// 1) Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result.
const multiplyNumbers = (num1, num2, num3) => num1 * num2 * num3;
const result = multiplyNumbers(5, 2, 6);
console.log(result);




// 2) Write the following sentence in three lines and print the result: I am a web developer. I love to code. I love to eat biryani.
const sentence = `I am a web developer
I love to code
I love to eat biryani.`
console.log(sentence);




// 3) Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.
const sum = (first, second = 5) => first + second;
const sumation = sum(5);
console.log(sumation);