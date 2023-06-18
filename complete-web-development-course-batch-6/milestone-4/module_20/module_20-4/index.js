// Check whether a year in  a loop Year or not (simplified way);



// function isLeapYear(year) {
//     const remainder = year % 4;
//     if (remainder === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// const isMyYearLeapYear = isLeapYear (1933);
// console.log('my year', isMyYearLeapYear);
// const isHerYearLeapYear = isLeapYear(1960);
// console.log('Her year', isHerYearLeapYear);


function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    }
    return false;
}
const isMyYearLeapYear = isLeapYear (1933);
console.log('my year', isMyYearLeapYear);
const isHerYearLeapYear = isLeapYear(1960);
console.log('Her year', isHerYearLeapYear);