// 6. declare an object, use destructuring to get an object by excluding one property



const data = {a: 1, b: 2, c: 3};
const {a, ...rest} = data;
console.log(rest);