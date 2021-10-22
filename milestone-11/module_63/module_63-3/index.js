//------Recap Node express and install nodemon for auto restart-------





const express = require('express');
const app = express();
const port = 5000;
app.get('/', (req, res) => {
    res.send('Hello World with node mode');
});
app.listen(port, () => {
    console.log('listening to port', port)
})