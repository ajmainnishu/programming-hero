// Write an arrow function where it will do the following: a) Square each array element, b) Calculate the sum of the squared elements, c) Return the average of the sum of the squared elements. Print the result.



const numbers = [5, 12, 15, 71, 2];
const mathNumbers = numbers => {
    let sumSquareNumber = 0
    for (const number of numbers) {
        const squareNumber = Math.pow(number, 2);
        sumSquareNumber = sumSquareNumber + squareNumber;
    }
    const averageSumSquareNumber = sumSquareNumber / numbers.length;
    return averageSumSquareNumber;
}

const result = mathNumbers(numbers);
console.log(result);