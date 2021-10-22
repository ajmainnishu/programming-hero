const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json())
const port = 5000;
app.get('/', (req, res) => {
    res.send('Hello World with node mode');
});
const user = [
    {id: 1, name: 'Nishu', email: 'nishu@gmail.com', phone: '017888888'},
    {id: 2, name: 'Ni', email: 'ni@gmail.com', phone: '017888888'},
    {id: 3, name: 'Nu', email: 'nu@gmail.com', phone: '017888888'},
    {id: 4, name: 'Rakib', email: 'rakib@gmail.com', phone: '017888888'},
    {id: 5, name: 'Sohan', email: 'sohan@gmail.com', phone: '017888888'},
    {id: 6, name: 'rr', email: 'rr@gmail.com', phone: '017888888'},
    {id: 7, name: 'ss', email: 'ss@gmail.com', phone: '017888888'}
]
app.get('/user', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = user.filter(u => u.name.toLowerCase().includes(search))
        res.send(searchResult)
    } else {
        res.send(user)
    }
})
app.post('/user', (req, res) => {
    const newUser = req.body
    newUser.id = user.length
    user.push(newUser)
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})
app.listen(port, () => {
    console.log('listening to port', port)
})