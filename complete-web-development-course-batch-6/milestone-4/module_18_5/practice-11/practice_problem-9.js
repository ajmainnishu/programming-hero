// Write the price of the books that you have. Display the prices if the prices is lower then 200



var bookPrices = [20, 200, 173, 160, 410, 500, 100, 50];
for (var i = 0; i < bookPrices.length; i++) {
    var bookPrice = bookPrices[i];
    if (bookPrice > 200) {
        continue;
    }
    console.log(bookPrice);
}