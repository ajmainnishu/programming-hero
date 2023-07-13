// 2. Create a string with the template string. In that, dynamically set the value of the variable declared above. Similarly declare an object above. And dynamically put the values ​​of the two properties of the above object into your template string.



const name = 'Ajmain Nishu';
const details = {
    profession: 'Software engineer',
    age: 24
}
console.log(`My name is ${name} and my profession is ${details.profession}, my age is ${details.age}`);