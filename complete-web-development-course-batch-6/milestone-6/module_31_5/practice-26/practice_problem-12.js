// 12. Optional chaining can be done with the question mark before the dot in the object above. Practice it a little.



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
console.log(person?.address?.subject[0]?.math);