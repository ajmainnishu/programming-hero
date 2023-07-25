// 1. declare object with 5 properties. string, boolean, number, function (method, access any object property and return it), array, object



const car = {
    name: 'tesla',
    drive: true,
    price: 3200,
    model: ['elon', 'musk'],
    feedback: function () {
        return this.name + ' is driving soo good'
    },
    address: {
        city: 'california',
        country: 'america'
    }
}
console.log(car);
const feedBack = car.feedback();
console.log(feedBack);