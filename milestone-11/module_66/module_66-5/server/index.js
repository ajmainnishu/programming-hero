const express = require('express')
const { MongoClient } = require('mongodb');
const cors = require('cors')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000
app.use(cors())
app.use(express.json())
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5ffrq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function run() {
    try {
        await client.connect()
        const database = client.db("foodMaster")
        const productCollection = database.collection("products")





        // app.get('/products', async(req, res) => {
        //     const cursor = productCollection.find({})
        //     const products = await cursor.limit(10).toArray()
        //     res.send(products)
        // })





        app.get('/products', async(req, res) => {
            const cursor = productCollection.find({})
            const products = await cursor.toArray()
            const count = await cursor.count()
            res.send({
                count,
                products
            })
        })





    }
    finally {}
}
run().catch(console.dir)
app.get('/', (req, res) => {
    res.send("Hello World")
})
app.listen(port)