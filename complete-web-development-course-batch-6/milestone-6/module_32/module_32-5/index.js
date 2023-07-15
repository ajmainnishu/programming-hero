// function loadUsers2() {
//       fetch('https://jsonplaceholder.typicode.com/users')
//       .then (res => res.json())
//       .then(data => displayUsers2(data))
// }
// function displayUsers2 (users) {
//       for (const data of users) {
//             console.log(data);
//       }
// }




// function loadUsers2() {
//       fetch('https://jsonplaceholder.typicode.com/users')
//       .then (res => res.json())
//       .then(data => displayUsers2(data))
// }
// function displayUsers2 (users) {
//       for (const data of users) {
//             console.log(data.name);
//       }
// }




function loadUsers2() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then (res => res.json())
      .then(data => displayUsers2(data))
}
function displayUsers2 (users) {
      const ul = document.getElementById('users-list');
      for (const data of users) {
            const li = document.createElement('li');
            li.innerText = data.name
            ul.appendChild(li);
      }
}