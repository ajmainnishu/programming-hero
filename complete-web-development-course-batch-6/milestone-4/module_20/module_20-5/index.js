// calculate Sum of all numbers of an array



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
console.log(getSumOfAnArray(myNumbers));