// local storage data set
const setLocalStorage = id => {
    let personInfo = {};
    const getInfo = localStorage.getItem('person-info');
    if (getInfo) {
        personInfo = JSON.parse(getInfo);
    }
    const idInfo = personInfo[id];
    if (idInfo) {
        personInfo[id] = idInfo + 1;
    } else {
        personInfo[id] = 1
    }
    localStorage.setItem('person-info', JSON.stringify(personInfo))
}

// local storage data remove
const removeLocalStorage = id => {
    const personInfo = localStorage.getItem('person-info')
    if (personInfo) {
        const idInfo = JSON.parse(personInfo);
        if (id in idInfo) {
            delete idInfo[id];
            localStorage.setItem('person-info', JSON.stringify(idInfo));
        }
    }
}

// clear all data
const localStorageClear = () => {
    localStorage.removeItem('person-info');
}

export {setLocalStorage, removeLocalStorage, localStorageClear}