const express = require('express')
const {MongoClient} = require('mongodb')
const ObjectId = require('mongodb').ObjectId
const cors = require('cors')
require('dotenv').config()
const app = express()
const port = 5000
app.use(cors())
app.use(express.json())
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5ffrq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function run() {
    try {
        await client.connect()
        const database = client.db("foodMaster")
        const usersCollection = database.collection("users")
        app.get('/users', async(req, res) => {
            const cursor = usersCollection.find({})
            const services = await cursor.toArray()
            res.send(services)
        })
        app.get('/users/:id', async(req, res) => {
            const id = req.params.id
            console.log('getting id', id)
            const query = {_id: ObjectId(id)}
            const service = await usersCollection.findOne(query)
            res.json(service)
        })
        app.post('/users', async(req, res) => {
            const service = req.body
            console.log('hit the post api', service)
            const result = await usersCollection.insertOne(service)
            console.log(result)
            res.json(result)
        })
    } finally {}
}
run().catch(console.dir)
app.get('/', (req, res) => {
    res.send('Hello World')
})
app.listen(port)