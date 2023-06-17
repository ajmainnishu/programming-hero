// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those singleNums.



function make_avg (values) {
    var sum = 0;
    for (singleNum of values) {
        sum += singleNum;
    }
    var average = sum / values.length;
    return average;
}

var arr = [10, 30, 20];
const averageValue = make_avg(arr);
console.log(averageValue);