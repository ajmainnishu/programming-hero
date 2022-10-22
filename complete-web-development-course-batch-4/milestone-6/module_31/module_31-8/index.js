// class TeamMember {
//     name;
//     designation = 'Support Web Dev';
//     address = 'BD';
//     constructor (name, address) {
//         this.name = name;
//         this.address = address;
//     }
// }
// class Support extends TeamMember {
//     groupSupportTime;
//     constructor(name, address, time) {
//         super(name, address)
//         this.groupSupportTime = time;
//     }
//     startSession() {
//         console.log(this.name, 'start a support session');
//     }
// }
// class StudentCare extends TeamMember {
//     buildARoutine(student) {
//         console.log(this.name, 'Build a routine for', student);
//     }
// }
// const amir = new Support('Amir Khan', 'Dubai', 11)
// console.log(amir)
// const salman = new StudentCare('Salman khan', 'BD');
// console.log(salman);