// 11. Declare a nested object (i.e. the object can be inside the property of an object. And the object can also be inside the property of that object. Declare such an object. And the value of any one property will be an array. Just such object )



const person = {
    name: 'Ajmain Nishu',
    age: 24,
    address: {
        city: 'Thakurgaon',
        district: 'Thakurgaon',
        subject: [
            {
                id: 1,
                math: 78
            },
            {
                id: 2,
                chemistry: 100
            }
        ]
    },
    number: [
        1, 2, 3, 4, 6
    ]
}
console.log(person.address.subject);