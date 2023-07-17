const loadUserFetch = async () => {
    const url = `https://randomuser.me/api/?gender=female`;
    const res = await fetch(url);
    const data = await res.json();
    displayUsers(data.results[0])
}
const displayUsers = user => {
    const usersContainer = document.getElementById('users-container');
    usersContainer.innerHTML = `
        <img src="${user.picture.large}">
        <p>City: ${user.location.city}</p>
        <p>Street: ${user.location.street.name}</p>
    `
}
loadUserFetch();