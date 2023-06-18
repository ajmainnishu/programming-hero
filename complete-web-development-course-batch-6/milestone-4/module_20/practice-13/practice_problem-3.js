// Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30] as the input parameter and will return the sum of the odd numbers



function findOddSum(numbers) {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element % 2 !== 0) {
            sum += element;
        }
    }
    return sum;
}
let arr = [5, 7, 8, 10, 45, 30];
let result = findOddSum(arr);
console.log(result);