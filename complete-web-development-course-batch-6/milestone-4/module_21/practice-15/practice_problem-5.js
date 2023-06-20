// An array contains many numbers. Write a program to find the second largest number from those numbers. Search Google if necessary. Then look at the search results and try to understand.



let arr = [51, 28, 71, 100, 101, 10, 5];
let highest = 0;
let secondHighest = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
        secondHighest = highest
        highest = arr[i];
    }
    else if (highest > arr[i] > secondHighest) {
        secondHighest = arr[i];
    }
}
console.log(secondHighest);