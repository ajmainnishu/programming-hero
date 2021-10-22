//------Create dynamic api, api parameter, access params-------





// const express = require('express');
// const app = express();
// const port = 5000;
// app.get('/', (req, res) => {
//     res.send('Hello World with node mode');
// });
// app.get('/user', (req, res) => {
//     res.send('Here is my users')
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
// app.get('/user', (req, res) => {
//     res.send({
//         id: 1,
//         name: 'Nishu',
//         email: 'nishu@gmail.com'
//     })
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
//     {id: 1, name: 'Ni', email: 'ni@gmail.com', phone: '017888888'},
//     {id: 1, name: 'Nu', email: 'nu@gmail.com', phone: '017888888'},
//     {id: 1, name: 'Rakib', email: 'rakib@gmail.com', phone: '017888888'},
//     {id: 1, name: 'Sohan', email: 'sohan@gmail.com', phone: '017888888'},
//     {id: 1, name: 'rr', email: 'rr@gmail.com', phone: '017888888'},
//     {id: 1, name: 'ss', email: 'ss@gmail.com', phone: '017888888'}
// ]
// app.get('/user', (req, res) => {
//     res.send(user)
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
//     {id: 1, name: 'Ni', email: 'ni@gmail.com', phone: '017888888'},
//     {id: 1, name: 'Nu', email: 'nu@gmail.com', phone: '017888888'},
//     {id: 1, name: 'Rakib', email: 'rakib@gmail.com', phone: '017888888'},
//     {id: 1, name: 'Sohan', email: 'sohan@gmail.com', phone: '017888888'},
//     {id: 1, name: 'rr', email: 'rr@gmail.com', phone: '017888888'},
//     {id: 1, name: 'ss', email: 'ss@gmail.com', phone: '017888888'}
// ]
// app.get('/user', (req, res) => {
//     res.send(user)
// })
// app.get('/user/:id', (req, res) => {
//     res.send(req.params.id)
//     console.log(req.params.id)
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
//     res.send(user)
// })
// app.get('/user/:id', (req, res) => {
//     const index = req.params.id
//     const users = user[index]
//     res.send(users)
// })
// app.listen(port, () => {
//     console.log('listening to port', port)
// })