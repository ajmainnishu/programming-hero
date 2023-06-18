// Check even and odd number using function



function isEven (number) {
    const remainder = number % 2;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}
const myNumberIsOdd = isEven(303);
console.log(myNumberIsOdd);
const myNumberIsEven = isEven(1280);
console.log(myNumberIsEven);