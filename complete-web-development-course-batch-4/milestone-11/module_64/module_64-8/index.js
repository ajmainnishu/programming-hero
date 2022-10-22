const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors')
const ObjectId = require('mongodb').ObjectId
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
        app.delete('/users/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)}
            const result = await usersCollection.deleteOne(query)
            console.log('deleting user with id', id)
            console.log('deleting the result', result)
            res.json(result)
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