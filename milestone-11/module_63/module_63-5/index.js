//------Access query parameter and return search result-------





// const express = require('express');
// const app = express();
// const port = 5000;
// app.get('/', (req, res) => {
//     res.send('Hello World with node mode');
// });
// app.get('/fruits', (req, res) => {
//     console.log(req.query)
//     console.log(req.query.search)
//     res.send(['mango', 'orange', 'banana', 'apple'])
// })
// app.listen(port, () => {
//     console.log('listening to port', port)
// })





// const express = require('express');
// const app = express();
// const port = 5000;
// app.get('/', (req, res) => {
//     res.send('Hello World with node mode');
// });
// const user = [
//     {id: 1, name: 'Nishu', email: 'nishu@gmail.com', phone: '017888888'},
//     {id: 2, name: 'Ni', email: 'ni@gmail.com', phone: '017888888'},
//     {id: 3, name: 'Nu', email: 'nu@gmail.com', phone: '017888888'},
//     {id: 4, name: 'Rakib', email: 'rakib@gmail.com', phone: '017888888'},
//     {id: 5, name: 'Sohan', email: 'sohan@gmail.com', phone: '017888888'},
//     {id: 6, name: 'rr', email: 'rr@gmail.com', phone: '017888888'},
//     {id: 7, name: 'ss', email: 'ss@gmail.com', phone: '017888888'}
// ]
// app.get('/user', (req, res) => {
//     const search = req.query.search;
//     if (search) {
//         const searchResult = user.filter(u => u.name.toLowerCase().includes(search))
//         res.send(searchResult)
//     } else {
//         res.send(user)
//     }
// })
// app.listen(port, () => {
//     console.log('listening to port', port)
// })