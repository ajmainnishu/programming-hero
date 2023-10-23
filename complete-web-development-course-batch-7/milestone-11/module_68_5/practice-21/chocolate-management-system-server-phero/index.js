const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

// mongodb connect link
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
        const chocolatesCollection = client.db('chocolateDB').collection('chocolate');
        // all chocolate date loading
        app.get('/chocolates', async (req, res) => {
            const result = await chocolatesCollection.find().toArray();
            res.send(result);
        })
        // single chocolate data loading
        app.get('/chocolates/:id', async (req, res) => {
            const id = req.params.id;
            const query = {_id: new ObjectId(id)};
            const result = await chocolatesCollection.findOne(query);
            res.send(result);
        })
        // new chocolate data added
        app.post('/chocolates', async (req, res) => {
            const data = req.body;
            console.log(data);
            const result = await chocolatesCollection.insertOne(data);
            res.send(result);
        })
        // single chocolate data edit
        app.put('/chocolates/:id', async (req, res) => {
            const id = req.params.id;
            const data = req.body;
            const query = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updateInfo = {
                $set: {
                    name: data.name,
                    country: data.country,
                    photo: data.photo,
                    category: data.category,
                    available: data.available,
                }
            }
            const result = await chocolatesCollection.updateOne(query, updateInfo, options);
            res.send(result);
        })
        // single chocolate data delete
        app.delete('/chocolates/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await chocolatesCollection.deleteOne(query);
            res.send(result);
        })
        
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Chocolate Management System Server Running')
})

app.listen(port);