// spinner
const loadingSpinner = (value) => {
    const spinner = document.getElementById('spinner');
    if (value) {
        spinner.classList.remove('d-none');
    }
    else {
        spinner.classList.add('d-none');
    }
}