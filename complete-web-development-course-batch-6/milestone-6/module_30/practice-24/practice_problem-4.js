// Write an arrow function where it will do the following: a) It will take two array inputs, b) Combine the two arrays and assign them in a new array, c) Find the maximum number from the new array and return the result. Print the result.




const arrayFunction = (arr1, arr2) => {
    const newArray = arr1.concat(arr2);
    const maximumNumber = Math.max(...newArray)
    return maximumNumber;
}

const arr1 = [2, 5, 7, 11, 18];
const arr2 = [21, 8, 1, 9];
const result = arrayFunction(arr1, arr2);
console.log(result);