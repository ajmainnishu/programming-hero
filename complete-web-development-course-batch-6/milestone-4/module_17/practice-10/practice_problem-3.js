// 1. You are given three numbers 13, 79, and 45. Write a program that will print the largest number using if-else. 2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a triangle is Isosceles or not using if-else. Isosceles => two sides are equal



// 1)
var num1 = 13;
var num2 = 79;
var num3 = 55;
if (num1 > num2 && num1 > num3) {
    console.log(num1);
}
else if (num2 > num1 && num2 > num3) {
    console.log(num2);
}
else {
    console.log(num3);
}


// 2)
var num1 = 9;
var num2 = 8;
var num3 = 9;
if (num1 == num2) {
    console.log('Triangle is Isosceles');
}
else if (num1 == num3) {
    console.log('Triangle is Isosceles');
}
else if (num2 == num3) {
    console.log('Triangle is Isosceles');
}
else {
    console.log('Triangle is not Isosceles');
}