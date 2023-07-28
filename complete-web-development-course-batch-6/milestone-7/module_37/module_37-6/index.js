// setInterval and clearInterval with x++ and ++x



// console.log('first');
// console.log('second');
// setInterval(() => {
//     console.log('third')
// });
// console.log('fourth');
// console.log('fifth');


// console.log('first');
// console.log('second');
// setInterval(() => {
//     console.log('third')
// }, 1500);
// console.log('fourth');
// console.log('fifth');




// console.log('first');
// console.log('second');
// let second = 0;
// setInterval(() => {
//     console.log(second++);
// }, 1500);
// console.log('fourth');
// console.log('fifth');




// console.log('first');
// console.log('second');
// let second = 0;
// const intervalId = setInterval(() => {
//     console.log(second++);
//     if (second === 10) {
//         clearInterval(intervalId);
//     }
// }, 1500);
// console.log('fourth');
// console.log('fifth');


// console.log('first');
// console.log('second');
// let second = 0;
// const intervalId = setInterval(() => {
//     second++;
//     console.log(second);
//     if (second === 10) {
//         clearInterval(intervalId);
//     }
// }, 100);
// console.log('fourth');
// console.log('fifth');


// console.log('first');
// console.log('second');
// let second = 0;
// const intervalId = setInterval(() => {
//     console.log(++second);
//     if (second === 10) {
//         clearInterval(intervalId);
//     }
// }, 100);
// console.log('fourth');
// console.log('fifth');




console.log('first');
console.log('second');
let second = 0;
const timeoutId = setTimeout(() => {
    console.log(++second);
    if (second === 10) {
        clearTimeout(timeoutId);
    }
}, 100);
console.log('fourth');
console.log('fifth');