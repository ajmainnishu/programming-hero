// Install node-express and run your first node server



const express = require('express');
const app = express();
const port = 5000;
app.get('/', (req, res) => {
    res.send('Hello from my first ever server')
})
app.get('/data', (req, res) => {
    res.send('More data coming soon');
})
app.listen(port , () => {
    console.log(`MY first server is running on port: ${port}`)
})