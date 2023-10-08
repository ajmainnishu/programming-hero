const express = require('express');
const cors = require('cors');
const app = express();
const places = require('./data/place.json')
const port = 5000
app.use(cors())

app.get('/', (req, res) => {
    res.send('Travel Guru Resources Running')
})

app.get('/places', (req, res) => {
    res.send(places);
})

app.get('/places/:id', (req, res) => {
    const id = req.params.id
    const place = places.find(p => parseInt(p.id) == id)
    res.send(place);
})

app.get('/booking/:id', (req, res) => {
    const id = req.params.id
    const hotels = places.find(p => parseInt(p.id) == id)
    res.send(hotels);
})

app.listen(port, () => {
    console.log(`Travel Guru Resources Running ${port}`)
})