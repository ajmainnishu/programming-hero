// template string, arrow function, spread operator



// const numbers = [89, 35, 98, 12];
// const student = {
//     name: 'Salib Khan',
//     age: 32,
//     movies: ['king khan', 'Dhakar Mastan']
// }
// const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} aslo liked movies ${student.movies[0]}`;
// console.log(about);




// const getFiftyFive = () => 55;
// const addSixtyFive = num => num + 65;
// const isEven = x => x % 2 == 0;
// const addThree = (x, y, z) => x + y + z;
// const doMath = (num1, num2) => {
//     const sum = num1 + num2;
//     return sum;
// }




const numbers = [89, 35, 98, 12];
const newNumbers = [...numbers];
numbers.push(11);
const currentNumbers = [...numbers, 55]
console.log(numbers, newNumbers, currentNumbers);