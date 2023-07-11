// Function default parameter for not provided values



// function add(first, second) {
//     if (second === undefined) {
//         second = 0;
//     }
//     const total = first + second;
//     return total;
// }
// const result = add(10);
// console.log(result);


// function add(first, second) {
//     second = second || 0;
//     const total = first + second;
//     return total;
// }
// const result = add(10);
// console.log(result);


// function add(first, second = 0) {
//     const total = first + second;
//     return total;
// }
// const result = add(10);
// console.log(result);


// function add(first, second = 0) {
//     const total = first + second;
//     return total;
// }
// const result = add(10, 20);
// console.log(result);


// function add(first = 0, second = 0) {
//     const total = first + second;
//     return total;
// }
// const result = add();
// console.log(result);


function fullName (first, second = 'Chowdhury') {
    const name = first + ' ' + second;
    return name
}
const name = fullName('Aslam');
console.log(name);