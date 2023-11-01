const express = require('express');
const cors = require('cors');
const app = express();
var jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// mongodb url link
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5ffrq.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// jwt email verify
const verifyJWT = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).send({ error: true, message: 'unauthorized access' });
    }
    const token = authorization.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
        if (error) {
            return res.status(401).send({ error: true, message: 'unauthorized access' });
        }
        req.decoded = decoded;
        next()
    })
}

async function run() {
    try {
        await client.connect();
        const toysCollection = client.db('usersDB').collection('toys');
        app.post('/jwt', async (req, res) => {
            const user = req.body;
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '1h'
            })
            res.send({ token });
        })
        // all toys
        app.get('/toys', async (req, res) => {
            const result = await toysCollection.find().toArray();
            res.send(result);
        })
        // single toy
        app.get('/toy/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await toysCollection.findOne(query);
            res.send(result);
        })
        // toys post
        app.post('/toys', async (req, res) => {
            const data = req.body
            const doc = {
                seller_name: data.sName,
                seller_email: data.sEmail,
                toy_name: data.tName,
                toy_img: data.tPhoto,
                price: data.price,
                rating: data.rating,
                quantity: data.quantity,
                details: data.details,
                category: data.category
            }
            const result = await toysCollection.insertOne(doc);
            res.send(result);
        })
        // user specific toys get
        app.get('/toy', verifyJWT, async (req, res) => {
            const decoded = req.decoded;
            if (decoded.email !== req.query?.email) {
                return res.status(401).send({ error: true, message: 'unauthorized access' });
            }
            let query = {};
            if (req.query?.email) {
                query = { seller_email: req.query.email }
            }
            const result = await toysCollection.find(query).toArray();
            res.send(result);
        })
        // single toy update
        app.put('/toy/:id', async (req, res) => {
            const id = req.params.id;
            const data = req.body;
            const query = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    price: data.price,
                    quantity: data.quantity,
                    details: data.details
                }
            }
            const result = await toysCollection.updateOne(query, updateDoc, options);
            res.send(result);
        })
        // single toy delete
        app.delete('/toy/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await toysCollection.deleteOne(query);
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
    res.send('Cudly Toy Store Running')
})

app.listen(port, () => {
    console.log(`Cudly Toy Store Running ${port}`)
})