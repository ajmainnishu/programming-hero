// button fetch data
const phoneDetails = async id => {
    try {
        const url = `https://openapi.programming-hero.com/api/phone/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        modalPhoneDetails(data.data);
    }
    catch (error) {
        console.log(error);
    }
}

// display button modal
const modalPhoneDetails = phone => {
    const phoneDetailsLabel = document.getElementById('phoneDetailsLabel');
    phoneDetailsLabel.innerText = phone.name;
    const modalBody = document.getElementById('body-modal');
    modalBody.innerHTML = `
        <p><b>Brand:</b> ${phone.brand ? phone.brand : 'Not Found'}</p>
        <p><b>Release Date:</b> ${phone.releaseDate 
        ? phone.releaseDate : 'Not Found'}</p>
        <p><b>Storage:</b> ${phone.mainFeatures ? phone.mainFeatures.storage : 'Not Found'}</p>
        <p><b>Chipset:</b> ${phone.mainFeatures ? phone.mainFeatures.chipSet : 'Not Found'}</p>
        <p><b>Memory:</b> ${phone.mainFeatures ? phone.mainFeatures.memory : 'Not Found'}</p>
        <p><b>Display:</b> ${phone.mainFeatures ? phone.mainFeatures.displaySize : 'Not Found'}</p>
        <p><b>Bluetooth:</b> ${phone.others ? phone.others.Bluetooth : 'Not Found'}</p>
        <p><b>NFC:</b> ${phone.others ? phone.others.NFC : 'Not Found'}</p>
    `
}