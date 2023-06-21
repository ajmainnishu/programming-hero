// Write a function. It will take three parameters. These three parameters will be the lengths of the three sides of a triangle. Now your task is to calculate the area of ​​the triangle by doing some calculations inside the function. If the length of three sides of a triangle is given, find out the formula from Google how to find the area.



function triArea (num1, num2, num3) {
    let p = (num1 + num2 + num3) / 2;
    let result = Math.sqrt(p * (p - num1) * (p - num2) * (p - num3));
    return result;
}

const area = triArea(11, 9, 9);
console.log(area);