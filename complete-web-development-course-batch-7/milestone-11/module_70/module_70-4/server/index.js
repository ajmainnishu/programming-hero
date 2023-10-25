const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

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
        const serviceCollection = client.db('usersDB').collection('carDoctors');
        const bookingCollection = client.db('usersDB').collection('bookings');
        app.get('/services', async (req, res) => {
            const cursor = serviceCollection.find();
            const result = await cursor.toArray();
            res.send(result)
        })
        app.get('/services/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const options = {
                projection: { title: 1, price: 1, service_id: 1 }
            }
            const result = await serviceCollection.findOne(query, options);
            res.send(result);
        })
        app.post('/bookings', async (req, res) => {
            const booking = req.body;
        })
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('doctor is running')
})
app.listen(port, () => {
    console.log(`Car Doctor Server is running on port ${port}`);
})