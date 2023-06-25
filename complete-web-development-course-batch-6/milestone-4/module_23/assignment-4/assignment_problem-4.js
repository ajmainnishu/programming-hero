// public bus fare calculate



function publicBusFare (numbers) {
    // number type check
    if (typeof numbers === 'number') {
        const reservedBus = 50;
        const microBus = 11;
        const publicBusMoney = 250;
        const freeService = reservedBus + microBus;
        if (numbers > freeService) {
            const publicBusPeople = numbers - freeService;
            // total bus fare
            const busMoney = publicBusPeople * publicBusMoney;
            return busMoney;
        }
        return 0;
    }
    return 'Please provide a valid input';
}