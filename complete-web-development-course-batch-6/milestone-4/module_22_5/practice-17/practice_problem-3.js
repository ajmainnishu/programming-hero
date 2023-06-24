/* Write another function whose name The function named paperRequirements will have three parameters as parameters of this function. The first parameter will be how many copies of the first book you want to print. The second parameter will be how many copies of the second book you want to print. And the third parameter will be how many copies of the third book you want to print. That is, how many copies of a book will be printed will be taken as a parameter.
Pay attention this time.
It will take 100 pages to print the first book
200 pages will be required to print the second book
300 pages will be required to print the third book
Now your job is to write a function called paperRequirements so that Calling that function will tell how many copies of a book will be required as a parameter. And the function will calculate and tell you how many pages of paper you will need in total. will return the number as the answer.
 */



function paperRequirements(firstBookQuantity, secondBookQuantity, thirdBookQuantity) {
    const firstBookPage = 100 * firstBookQuantity;
    const secondBookPage = 200 * secondBookQuantity;
    const thirdBookPage = 300 * thirdBookQuantity;
    const totalBookPage = firstBookPage + secondBookPage + thirdBookPage;
    return totalBookPage;
}

const firstBookQuantity = 2;
const secondBookQuantity = 5;
const thirdBookQuantity = 3;
const totalPage = paperRequirements(firstBookQuantity, secondBookQuantity, thirdBookQuantity);
console.log(totalPage);