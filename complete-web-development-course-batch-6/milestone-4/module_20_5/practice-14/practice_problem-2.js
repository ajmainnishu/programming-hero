// You will be given Fahrenheit as input to the function. You calculate the temperature and convert it to fahrenheit and return the output.



function fahrenheit(number) {
    let celsius = ((number - 32) * (5 / 9));
    return celsius;
}

let number = 32;
let result = fahrenheit(number);
console.log(result);