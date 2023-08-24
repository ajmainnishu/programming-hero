const getTotalPrice = price => {
    const totalPrice = price.reduce((previous, current) => previous + current.price, 0)
    return totalPrice
}

export default getTotalPrice;