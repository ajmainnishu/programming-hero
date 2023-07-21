// input field search button
document.getElementById('btn-search').addEventListener('click', function () {
    loadingButtonData(10);
});

// input field enter press
document.getElementById('input-field').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        loadingButtonData(10);
    }
})

// input field fetch data
const loadingFetchData = async (searchText, dataLimit) => {
    try {
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
        const res = await fetch(url);
        const data = await res.json();
        displayFetchData(data.data, dataLimit);
    }
    catch (error) {
        console.log(error);
    }
}

// display input fetch data
const displayFetchData = (phones, dataLimit) => {
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.textContent = '';
    const showAll = document.getElementById('show-all');
    if (phones.length > dataLimit) {
        phones = phones.slice(0, 9);
        showAll.classList.remove('d-none');
    }
    else {
        showAll.classList.add('d-none');
    }
    dataFoundMessage(phones);
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card h-100 bg-light">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body py-4">
                <h3 class="card-title">${phone.phone_name}</h3>
                <p class="card-text">Price: Coming Soon</p>
                <a onclick="phoneDetails('${phone.slug}')" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#phoneDetails">Details</a>
            </div>
        </div>
        `
        phonesContainer.appendChild(phoneDiv);
    })
    spinner(false);
}