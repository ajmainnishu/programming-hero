// (semi-advanced) A simple introduction to Date object in JavaScript



// const today = new Date ();
// console.log(today);




// console.log(new Date('1999-12-30'));




// const date1 = new Date('1971-03-26');
// const date2 = new Date('1971-12-16');
// if (date1 > date2) {
//     console.log('march was before december');
// }
// else {
//     console.log('march was not before december');
// }


const date1 = new Date('1971-03-26');
const date2 = new Date('1971-12-16');
if (date1.getTime() < date2.getTime()) {
    console.log('march was before december');
}
else {
    console.log('march was not before december');
}