const express = require('express')
const {MongoClient} = require('mongodb')
require('dotenv').config()
const app = express()
const port = 5000
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5ffrq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
console.log(uri)
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function run() {
    try {
        await client.connect()
        const database = client.db("foodMaster")
        const usersCollection = database.collection("users")
        app.post('/users', async(req, res) => {
            const service = {
                "name": "ENGINE DIAGNOSTIC",
                "price": "300",
                "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
                "img": "https://i.ibb.co/dGDkr4v/1.jpg"
            }
            const result = await usersCollection.insertOne(service)
            console.log(result)
        })
    } finally {}
}
run().catch(console.dir)
app.get('/', (req, res) => {
    res.send('Hello World')
})
app.listen(port)