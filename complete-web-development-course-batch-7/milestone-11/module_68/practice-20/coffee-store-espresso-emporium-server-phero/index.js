const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

// mongdb url
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5ffrq.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        const coffeesCollection = client.db('coffeesDB').collection('coffees');
        // all coffees data
        app.get('/coffees', async (req, res) => {
            const result = await coffeesCollection.find().toArray();
            res.send(result)
        })
        // single coffee data
        app.get('/coffees/:id', async (req, res) => {
            const id = req.params.id;
            const query = {_id: new ObjectId(id)};
            const result = await coffeesCollection.findOne(query);
            res.send(result)
        })
        // add coffee data in server
        app.post('/coffees', async (req, res) => {
            const data = req.body;
            const result = await coffeesCollection.insertOne(data);
            res.send(result);
        })
        // edir coffee data in server
        app.put('/coffees/:id', async (req, res) => {
            const data = req.body;
            const id = req.params.id;
            const filter = {_id: new ObjectId(id)};
            const options = {upsert: true};
            const updateCoffee = {
                $set: { 
                    name: data.name,
                    chef: data.chef,
                    price: data.price,
                    photo: data.photo,
                    supplier: data.supplier,
                    taste: data.taste,
                    category: data.category,
                    details: data.details,
                }
            }
            const result = await coffeesCollection.updateOne(filter, updateCoffee, options);
            res.send(result);
        })
        // single coffee data delete in server
        app.delete('/coffees/:id', async (req, res) => {
            const id = req.params.id;
            const query = {_id: new ObjectId(id)};
            const result = await coffeesCollection.deleteOne(query);
            res.send(result)
        })
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Coffee Server Running')
})

app.listen(port);