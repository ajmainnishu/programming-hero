//Node mongo crud server, mongodb atlas account





const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 5000;
const uri = "";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    client.close();
});
app.get('/', (req, res) => {
    res.send('Hello World');
})
app.listen(port)