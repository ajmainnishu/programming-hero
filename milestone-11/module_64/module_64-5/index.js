const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 5000;
const uri = "";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function run() {
    try {
        await client.connect();
        const database = client.db("foodMaster");
        const usersCollection = database.collection("users");
        app.post('/users', async(req, res) => {
            console.log('hitting the post', req.body)
            res.send('hit the post')
        })
        } finally {
        await client.close();
        }
    }
    run().catch(console.dir);
app.get('/', (req, res) => {
    res.send('Hello World');
})
app.listen(port)