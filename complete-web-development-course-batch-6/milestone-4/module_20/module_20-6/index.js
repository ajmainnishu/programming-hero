// Get Odd Numbers of an array and get odd Sum of an array



// function getOddNumbersOfAnArray(numbers) {
//     const oddNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         if (element % 2 !== 0) {
//             oddNumbers.push(element);
//         }
//     }
//     return oddNumbers;
// }
// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// const oddNumbers = getOddNumbersOfAnArray(myNumbers);
// console.log(oddNumbers);




function getOddNumbersOfAnArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 === 1) {
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}
function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i ++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
    }
    return sum;
}
const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
const oddNumbersSum = getSumOfAnArray(oddNumbers);
console.log(oddNumbers);
console.log('odd number sum', oddNumbersSum);