// auto local storage run
const autoSaveLocalStorage = () => {
    const name = 'Sakib Khan';
    localStorage.setItem('name', name);
    const obj = {firstName: 'Abraham', lastName: 'Linkon'};
    const objStringified = JSON.stringify(obj);
    localStorage.setItem('object', objStringified);
}
autoSaveLocalStorage();

// button age add
document.getElementById('btn-add').addEventListener('click', function () {
    const ageField = document.getElementById('input-field');
    const ageFieldValue = ageField.value;
    ageField.value = '';
    localStorage.setItem('age', ageFieldValue);
})

// button remove name
document.getElementById('btn-remove-name').addEventListener('click', function () {
    localStorage.removeItem('name');
})

// button remove age
document.getElementById('btn-remove-age').addEventListener('click', function () {
    localStorage.removeItem('age');
})

// button clear
document.getElementById('btn-clear').addEventListener('click', function () {
    localStorage.clear();
})