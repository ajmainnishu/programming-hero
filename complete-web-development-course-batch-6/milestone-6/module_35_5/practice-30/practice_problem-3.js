// 3. Arrow function
// 3.1: no params return 89
// 3.2: number as param and return it by dividing by 17
// 3.3 two parameters: add 7 to the first number and add 5 to the second number and then add them and then if the result is even return true otherwise return false
// 3.4: multiline arrow function: array of numbers as input params: sum of all numbers. and the square of the result



// 3
const arrowFunction = () => {

}




// 3.1
const noParams = () => {
    return 89;
}
const noParamsResult = noParams();
console.log(noParamsResult);




// 3.2
const paramsFunction = (value) => {
    return value / 17;
}
const paramsFunctionResult = paramsFunction(170);
console.log(paramsFunctionResult);




// 3.2
const twoParams = (num1, num2) => {
    const sum = (num1 + 7) + (num2 + 5);
    if (sum % 2 === 0) {
        return true
    }
    return false;
}
const twoParamsResult = twoParams(9, 5);
console.log(twoParamsResult);




// 3.3
const arr = [2, 11, 176, 15, 20, 25];
const multiArrow = (arr) => {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    const squareResult = Math.pow(sum, 2);
    console.log(squareResult);
}
multiArrow(arr);