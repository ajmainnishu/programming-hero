const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors')
const app = express();
const port = 5000;
app.use(cors())
app.use(express.json())
const uri = "";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function run() {
    try {
        await client.connect();
        const database = client.db("foodMaster");
        const usersCollection = database.collection("users");
        app.get('/users', async (req, res) => {
            const cursor = usersCollection.find({})
            const users = await cursor.toArray()
            res.send(users)
        })
        app.post('/users', async(req, res) => {
            const newUser = req.body
            const result = await usersCollection.insertOne(newUser)
            res.send(JSON.stringify(result))
        })
        } finally {
        // await client.close();
        }
    }
    run().catch(console.dir);
app.get('/', (req, res) => {
    res.send('Hello World');
})
app.listen(port)