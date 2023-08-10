// dot vs bracket notation



const person = {
    name: 'Lal Nil Holud Mia',
    profession: 'Traffic Surgeon',
    age: 39,
    25: 'Summer',
    'son-name': 'Sunny',
    address: 'Shahbag'
}
const prof1 = person.profession;
const prof2 = person['profession'];
const pName= 'profession';
const prof3 = person[pName];
const season = person[25];
const son = person['son-name'];