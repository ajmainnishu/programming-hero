// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. You need to do it in 4 ways: ● Has return + Has parameter ● No return + Has parameter



// no return + has parameter
function odd_even1 (num) {
    if ((num % 2) == 0) {
        console.log('Even');
    }
    else {
        console.log('Odd');
    }
}
odd_even1(4);


// no return + no parameter
function odd_even2 () {
    if ((4 % 2) == 0) {
        console.log('Even');
    }
    else {
        console.log('Odd');
    }
}
odd_even2();


// has return + no parameter
function odd_even3 () {
    if ((4 % 2) == 0) {
        return 'Even';
    }
    else {
        return 'Odd';
    }
}
const value1 = odd_even3();
console.log(value1);


// has return + has parameter
function odd_even4 (num) {
    if ((num % 2) == 0) {
        return 'Even';
    }
    else {
        return 'Odd';
    }
}
const value2 = odd_even4(4);
console.log(value2);