// buttons
const loadingButtonData = (dataLimit) => {
    spinner(true);
    const inputField = document.getElementById('input-field');
    const inputFieldText = inputField.value;
    loadingFetchData(inputFieldText, dataLimit);
}

// data found or not message
const dataFoundMessage = (phones) => {
    const notFoundMessage = document.getElementById('not-found-message');
    if (phones.length === 0) {
        notFoundMessage.classList.remove('d-none');
    }
    else {
        notFoundMessage.classList.add('d-none');
    }
}

// display spinner
const spinner = isLoading => {
    const spinnerLoader = document.getElementById('spinner');
    if (isLoading) {
        spinnerLoader.classList.remove('d-none');
    }
    else {
        spinnerLoader.classList.add('d-none');
    }
}