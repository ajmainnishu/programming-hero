// (optional) Explore Reduce and Dot notation



// const numbers = [1, 2, 3, 4, 5];
// const total = numbers.reduce((previous, current) => previous + current, 0);
// console.log(total);


// const numbers = [1, 2, 3, 4, 5];
// const total = numbers.reduce((previous, current) => {
//     console.log(previous, current);
//     return previous + current
// }, 0);
// console.log(total);




// const student = {
//     name: 'Kolim Uddin',
//     age: 15,
//     class: 'Ten',
//     marks: {
//         math: 78,
//         physics: 89,
//         chemistry: 65
//     }
// }
// const chemistry = student['marks']['chemistry'];
// console.log(chemistry);


const student = {
    name: 'Kolim Uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    }
}
const subject = 'math';
const subjectMarks = student.marks[subject];
console.log(subjectMarks);