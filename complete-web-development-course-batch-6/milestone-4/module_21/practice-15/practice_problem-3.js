// Write a function. The function will take an array as input. That array will contain many numbers. Your task will be to input as many numbers as there are in the array. Find the average of those numbers. Then return that average function. think a little try to understand try it see if you can



function averageNumber (num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        let element = num[i];
        sum += element;
    }
    let average = (sum / num.length);
    return average;
}



let arr = [2, 15, 12, 15, 17, 5];
let result = averageNumber(arr);
console.log(result);