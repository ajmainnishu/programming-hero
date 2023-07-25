// 2. template string: access values from the object above
// 2.1: array third element
// 2.2 property of the object



const student = {
    name: ['ajmain', 'nishu'],
    result: function () {
        return `${this.name} is a good student`;
    }
}
const result = student.result();
console.log(result);