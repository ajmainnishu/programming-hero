const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json())

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
        const coffeeCollection = client.db('usersDB').collection('coffee')
        app.get('/coffee', async (req, res) => {
            res.send(await coffeeCollection.find().toArray());
        })
        app.get('/coffee/:id', async (req, res) => {
            res.send(await coffeeCollection.findOne({_id: new ObjectId(req.params.id)}));
        })
        app.post('/coffee', async (req, res) => {
            res.send(await coffeeCollection.insertOne(req.body));
        })
        app.put('/coffee/:id', async (req, res) => {
            const filter = {_id: new ObjectId(req.params.id)}
            const options = {upsert: true};
            const coffee = {
                $set: {
                    name: req.body.name, 
                    quantity: req.body.quantity, 
                    supplier: req.body.supplier, 
                    taste: req.body.taste, 
                    category: req.body.category, 
                    details: req.body.details, 
                    photo: req.body.photo,
                }
            }
            res.send(await coffeeCollection.updateOne(filter, coffee, options));
        })
        app.delete('/coffee/:id', async (req, res) => {
            res.send(await coffeeCollection.deleteOne({ _id: new ObjectId(req.params.id) }))
        })
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Coffee making server is running');
})
app.listen(port, () => {
    console.log(`Coffee Server is running on port: ${port}`);
})