// This can be a little tricky. An array will contain many numbers. Your task is to check the numbers one by one. and if the numbers are positive numbers. That is, zero or greater than zero, then put them in an array. And if the number is negative. Then the loop will stop. and as many positive numbers are found until the loop is closed. Will return them



function onlyPositive (arr) {
    let positiveArr = [];
    for (let i of arr) {
        if (i < 0) {
            break;
        }
        positiveArr.push(i);
    }
    return positiveArr;
}

const arr = [45, 87, 96, 11, 63, -56, 71, 28];
const result = onlyPositive(arr);
console.log(result);