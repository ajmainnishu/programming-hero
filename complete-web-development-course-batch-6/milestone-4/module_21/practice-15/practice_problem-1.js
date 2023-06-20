// Write a code. With which one can extract the smallest number in an array.



function smallestArray (numbers) {
    let smallest = numbers[0];
    for (let i = numbers.length; i >= 0; i--) {
        let element = numbers[i];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}


let arr = [12, 231, 15, 5, 35, 31, 20];
const result = smallestArray(arr);
console.log(result);