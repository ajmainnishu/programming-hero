// More Arrow functions and big arrow function



// const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;
// const result = addAll(1, 1, 1, 1, 1, 1);
// console.log(result);




// const getPie = () => 3.14;
// console.log(getPie());




// const doubleIt = (num) => num * 2;
// console.log(doubleIt(5));




// const fiveTimes = num => num * 5;
// console.log(fiveTimes(5));




const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum + secondSum;
    const result = multiplyResult / 2;
    return result;
}
console.log(doMath(5, 10, 1));