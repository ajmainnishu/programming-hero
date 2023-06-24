// Write a function with the exact name of the function centimeterToMeter. One would give centimeters as input to this function and return the result after converting those centimeters to meters



function centimeterToMeter (centimeters) {
    const meter = centimeters / 100;
    return meter;
}

const data = 500;
const result = centimeterToMeter(data);
console.log(data, 'centimeter:', result, 'meter');