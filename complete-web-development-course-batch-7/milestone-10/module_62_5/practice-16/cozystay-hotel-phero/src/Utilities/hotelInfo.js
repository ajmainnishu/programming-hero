// hotel api fetch
const hotelInfo = async () => {
    const hotelInformation = await fetch('hotel-api.json');
    const hotel = await hotelInformation.json();
    return hotel;
}

export default hotelInfo;