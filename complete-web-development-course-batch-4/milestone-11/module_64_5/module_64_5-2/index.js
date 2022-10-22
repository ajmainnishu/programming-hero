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
        app.get('/users/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)}
            const user = await usersCollection.findOne(query)
            console.log('load user with id', id)
            res.send(user)
        })
        app.post('/users', async(req, res) => {
            const newUser = req.body
            const result = await usersCollection.insertOne(newUser)
            res.send(JSON.stringify(result))
        })
        app.put('/users/:id', async (req, res) => {
            const id = req.params.id
            const updatedUser = req.body
            const filter = {_id: ObjectId(id)}
            const options = {upsert: true}
            const updateDoc = {
                $set: {
                    name: updatedUser.name,
                    email: updatedUser.email
                }
            }
            const result = await usersCollection.updateOne(filter, updateDoc, options)
            console.log('request', req)
            console.log('updating user', id)
            res.json(result)
        })
        app.delete('/users/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)}
            const result = await usersCollection.deleteOne(query)
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