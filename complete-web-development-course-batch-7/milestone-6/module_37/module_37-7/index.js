// (optional) Callback function and pass different functions



// function greetings (person) {
//     console.log(person);
// }
// const name = 'Halim mama';
// console.log(name);


// function greetings (person) {
//     console.log(person);
// }
// const numbers = [45, 54, 78];
// console.log(numbers);


// function greetings (person) {
//     console.log(person);
// }
// const laptop = {price: 45000, brand: 'lenono', memory: '8gb'};
// console.log(laptop);


// function greetings (person) {
//     console.log(person);
// }
// function greetingsHandler () {
//     console.log('Good Morning');
// }
// greetings(greetingsHandler());


// function greetings (greetingsHandler, name) {
//     greetingsHandler(name);
// }
// function greetingsHandler (name) {
//     console.log('Good Morning', name);
// }
// greetings(greetingsHandler, 'Tom Hanks');
// greetings(greetingsHandler, 'Tom Brady');




function submitHandler () {
    console.log('submit button clicked');
}
document.getElementById('btn-submit').addEventListener('click', submitHandler)