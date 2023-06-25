// total oil price calculate



function oilPrice (dieselQuantity, petrolQuantity, octaneQuantity) {
    // number type check
    if (typeof dieselQuantity === 'number' && typeof petrolQuantity === 'number' && typeof octaneQuantity === 'number') {
        const dieselPrice = 114;
        const petrolPrice = 130;
        const octanePrice = 135;
        // total oil price
        const totalOilPrice = (dieselPrice * dieselQuantity) + (petrolPrice * petrolQuantity) + (octanePrice * octaneQuantity);
        return totalOilPrice;
    }
    return 'Please provide a valid input';
}