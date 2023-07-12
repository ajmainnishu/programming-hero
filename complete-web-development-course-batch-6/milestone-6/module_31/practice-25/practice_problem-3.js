// 1) Challenging Follow above array of objects. So, you have 3 objects as array element. Can you find out the total sum from here? 20 + 15 + 22 = 57 . The output will be 57. What are you thinking? Yeah! Do it with for loop. I know you can do it. But! Wait !! Wait !!! Do the same task using array.reduce() method.



// using for loop
const people1 = [
    {name:'Meena', age: 20},
    {name:'Rina', age: 15},
    {name:'Suchorita', age: 22}
]
let sum = 0
for (let i = 0; i < people1.length; i++) {
    sum = sum + people1[i].age;
}
console.log(sum);

// using reduce
const people2 = [
    {name:'Meena', age: 20},
    {name:'Rina', age: 15},
    {name:'Suchorita', age: 22}
];
const result = people2.reduce ((previous, current) => {
    return previous + current.age;
}, 0)
console.log(result);