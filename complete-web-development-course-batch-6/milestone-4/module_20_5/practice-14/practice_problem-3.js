// Someone will tell you how many marks you got out of 100. You give a function to say whether he gets an A+ or some other grade.



function result(number) {
    if (number >=80 && number <= 100) {
        return 'A+'
    }
    else if (number >= 70 && number < 80) {
        return 'A';
    }
    else if (number >=60 && number < 70) {
        return 'A-';
    }
    else if (number >=50 && number < 60) {
        return 'B';
    }
    else if (number >=40 && number < 50) {
        return 'C';
    }
    else {
        return 'Fail';
    }
}

console.log(result(85));