// You will be given Celsius as input to the function. You calculate the temperature and convert it to Fahrenheit and return the output



function celsius(number) {
    let fahrenheit = ((number * (9 / 5) + 32))
    return fahrenheit;
}

let number = 1;
let result = celsius(number);
console.log(result);