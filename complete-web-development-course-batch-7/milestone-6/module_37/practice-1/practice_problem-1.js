// practice problem 1



// 1) If I write []==true,will it show true or false? Check it out.
if ([] == true) {
    console.log(true);
}
else {
    console.log(false)
}




// 2) Use === to check if the true === "true" gives true or false.
if ([] === true) {
    console.log(true);
}
else {
    console.log(false)
}




// 3) Write an arrow function that will take a parameter and will check if the parameter is a number or not by using isNaN(). And return true or false.
const checkIsNaN = (value) => {
    if (value === isNaN) {
        return true;
    } else {
        return false;
    }
}
const result = checkIsNaN(5);
console.log(result);