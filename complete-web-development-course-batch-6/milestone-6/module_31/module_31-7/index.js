// (semi-advanced) Class, constructor, method, create object from class



// class Instructor {
//     name;
//     designation = 'Web Course Instructor'
//     team = 'web team'
//     location;
//     startSupoortSession(time) {
//         console.log(`start the support session at ${time}`)
//     }
//     creatQuiz (module) {
//         console.log(`please create quiz for module ${module}`)
//     }
// }
// const aamir = new Instructor();
// console.log(aamir);




// class Instructor {
//     name;
//     designation = 'Web Course Instructor'
//     team = 'web team'
//     location;
//     startSupoortSession(time) {
//         console.log(`start the support session at ${time}`)
//     }
//     creatQuiz (module) {
//         console.log(`please create quiz for module ${module}`)
//     }
// }
// const aamir = new Instructor();
// aamir.startSupoortSession('9.00');




// class Instructor {
//     name;
//     designation = 'Web Course Instructor'
//     team = 'web team'
//     location;
//     constructor(name, location) {
//         this.name = name;
//         this.location = location;
//     }
//     startSupoortSession(time) {
//         console.log(`start the support session at ${time}`)
//     }
//     creatQuiz (module) {
//         console.log(`please create quiz for module ${module}`)
//     }
// }
// const aamir = new Instructor('aamir', 'mumbai');
// console.log(aamir);


// class Instructor {
//     constructor(name, location) {
//         this.name = name;
//         this.location = location;
//     }
//     name;
//     designation = 'Web Course Instructor'
//     team = 'web team'
//     location;
//     startSupoortSession(time) {
//         console.log(`start the support session at ${time}`)
//     }
//     creatQuiz (module) {
//         console.log(`please create quiz for module ${module}`)
//     }
// }
// const aamir = new Instructor('aamir', 'mumbai');
// console.log(aamir);


class Instructor {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    designation = 'Web Course Instructor'
    team = 'web team'
    startSupoortSession(time) {
        console.log(`start the support session at ${time}`)
    }
    creatQuiz (module) {
        console.log(`please create quiz for module ${module}`)
    }
}
const aamir = new Instructor('aamir', 'mumbai');
console.log(aamir);