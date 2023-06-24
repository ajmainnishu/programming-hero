// Write a simple function. Which will be called feetToInch and this function will take feet as input and return inch. That is, if this function is called a fit, it will tell how many inches it is as a return



function feetToInch(feet) {
    let inch = feet * 12;
    return inch;
}

const data = 5;
const result = feetToInch(data);
console.log(data, 'feet =', result, 'inches');