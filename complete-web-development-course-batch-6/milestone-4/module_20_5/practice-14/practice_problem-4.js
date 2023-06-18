// Calculate the interest. Just how to calculate. Will do with that thought. Now there is no need to worry whether interest is good or bad. Just try to do it from the angle of how to write it in code if there is a formula



function simpleInterest (num1, num2, num3) {
    let interest = (num1 * num2 * num3) / 100;
    return interest;
}

let principleAmout = 1000;
let rateOfInterest = 0.05;
let timeInYears = 2;

let result = simpleInterest(principleAmout, rateOfInterest, timeInYears);
console.log(result);