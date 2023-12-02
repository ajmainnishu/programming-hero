const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const stripe = require("stripe")(process.env.PAYMENT_SECRET_KEY);
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// mongodb link to server
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5ffrq.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// verify email by jwt token
const verifyJWT = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).send({ error: true, message: 'unauthorized access' })
    }
    const token = authorization.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({ error: true, message: 'unauthorized access' })
        }
        req.decoded = decoded;
        next();
    })
}

async function run() {
    try {
        await client.connect();
        const menuCollection = client.db('usersDB').collection('menu');
        const cartCollection = client.db('usersDB').collection('carts');
        const userCollection = client.db('usersDB').collection('users');
        const bookingCollection = client.db('usersDB').collection('userbookings');
        const paymentCollection = client.db('usersDB').collection('payments');
        // jwt
        app.post('/jwt', (req, res) => {
            const user = req.body;
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '1h'
            })
            res.send(token);
        })
        // verify admin
        const verifyAdmin = async (req, res, next) => {
            const email = req.decoded.email;
            const query = { email: email };
            const user = await userCollection.findOne(query);
            if (user?.role !== 'admin') {
                return res.status(403).send({ error: true, message: 'forbidden message' });
            }
            next();
        }
        // users
        app.get('/users', verifyJWT, verifyAdmin, async (req, res) => {
            const result = await userCollection.find().toArray();
            res.send(result);
        })
        app.get('/users/admin/:email', verifyJWT, async (req, res) => {
            const email = req.params.email;
            const verifyEmail = req.decoded.email;
            if (verifyEmail !== email) {
                return res.send({ admin: false })
            }
            const query = { email: email };
            const user = await userCollection.findOne(query);
            const result = { admin: user?.role === 'admin' };
            res.send(result);
        })
        app.post('/users', async (req, res) => {
            const data = req.body;
            const query = { email: data.email };
            const existingUser = await userCollection.findOne(query);
            if (existingUser) {
                return res.send({ message: 'user already exits' })
            }
            const result = await userCollection.insertOne(data);
            res.send(result);
        })
        app.patch('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const updateDoc = {
                $set: {
                    role: 'admin'
                }
            }
            const result = await userCollection.updateOne(query, updateDoc);
            res.send(result);
        })
        app.delete('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await userCollection.deleteOne(query);
            res.send(result);
        })
        // menu
        app.get('/menu', async (req, res) => {
            const result = await menuCollection.find().toArray();
            res.send(result);
        })
        app.post('/menu', verifyJWT, verifyAdmin, async (req, res) => {
            const data = req.body;
            const result = await menuCollection.insertOne(data);
            res.send(result);
        })
        app.put('/menu/:id', async (req, res) => {
            const id = req.params.id;
            const data = req.body;
            const filter = { _id: new ObjectId(id) };
            const updateDoc = {
                $set: {
                    name: data.name,
                    price: data.price,
                    category: data.category,
                    recipe: data.recipe
                }
            };
            const result = await menuCollection.updateOne(filter, updateDoc)
            res.send(result);
        })
        app.delete('/menu/:id', verifyJWT, verifyAdmin, async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await menuCollection.deleteOne(query);
            res.send(result);
        })
        // carts
        app.get('/carts', verifyJWT, async (req, res) => {
            const email = req.query.email;
            if (!email) {
                res.send([])
            }
            const decodedEmail = req.decoded.email;
            if (email !== decodedEmail) {
                return res.status(403).send({ error: true, message: 'forbidden access' })
            }
            const query = { email: email };
            const result = await cartCollection.find(query).toArray();
            res.send(result);
        })
        app.post('/carts', async (req, res) => {
            const data = req.body;
            const result = await cartCollection.insertOne(data);
            res.send(result);
        })
        app.delete('/carts/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await cartCollection.deleteOne(query);
            res.send(result);
        })
        // booking
        app.get('/bookings', verifyJWT, verifyAdmin, async (req, res) => {
            const result = await bookingCollection.find().toArray();
            res.send(result);
        })
        app.get('/userbookings', verifyJWT, async (req, res) => {
            const email = req.query.email;
            if (!email) {
                res.send([])
            }
            const decodedEmail = req.decoded.email;
            if (email !== decodedEmail) {
                return res.status(403).send({ error: true, message: 'forbidden access' })
            }
            const query = { email: email };
            const result = await bookingCollection.find(query).toArray();
            res.send(result);
        })
        app.post('/bookings', verifyJWT, async (req, res) => {
            const data = req.body;
            const result = await bookingCollection.insertOne(data);
            res.send(result);
        })
        app.patch('/bookings/:id', verifyJWT, verifyAdmin, async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const updateDoc = {
                $set: {
                    status: 'done'
                }
            }
            const result = await bookingCollection.updateOne(filter, updateDoc);
            res.send(result);
        })
        app.delete('/bookings/:id', verifyJWT, async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await bookingCollection.deleteOne(query);
            res.send(result);
        })
        // payment
        app.get('/payments', verifyJWT, async (req, res) => {
            const email = req.query.email;
            if (!email) {
                res.send([])
            }
            const decodedEmail = req.decoded.email;
            if (email !== decodedEmail) {
                return res.status(403).send({ error: true, message: 'forbidden access' })
            }
            const query = { email: email };
            const result = await paymentCollection.find(query).toArray();
            res.send(result);
        })
        app.post('/create-payment-intent', verifyJWT, async (req, res) => {
            const { price } = req.body;
            const amount = parseInt(price * 100);
            const paymentIntent = await stripe.paymentIntents.create({
                amount: amount,
                currency: "usd",
                payment_method_types: ['card']
            })
            res.send({
                clientSecret: paymentIntent.client_secret
            })
        })
        app.post('/payments', verifyJWT, async (req, res) => {
            const payment = req.body;
            const insertResult = await paymentCollection.insertOne(payment);
            const query = { _id: { $in: payment.cartItems.map(id => new ObjectId(id)) } };
            const deleteResult = await cartCollection.deleteMany(query);
            res.send({ insertResult, deleteResult });
        })
        // admin stat
        app.get('/admin-stats', verifyJWT, verifyAdmin, async (req, res) => {
            const payments = await paymentCollection.find().toArray();
            const revenue = payments.reduce((sum, payment) => sum + payment.price, 0);
            const customers = await userCollection.estimatedDocumentCount();
            const products = await menuCollection.estimatedDocumentCount();
            const orders = await paymentCollection.estimatedDocumentCount();
            res.send({ revenue, customers, products, orders });
        })
        app.get('/admin-order-stats', async (req, res) => {
            const pipeline = [
                {
                    $lookup: {
                        from: 'menu',
                        localField: 'menuItems',
                        foreignField: '_id',
                        as: 'menuItemsData'
                    }
                },
                {
                    $unwind: '$menuItemsData'
                },
                {
                    $group: {
                        _id: '$menuItemsData.category',
                        count: { $sum: 1 },
                        totalPrice: { $sum: '$menuItemsData.price' }
                    }
                },
                {
                    $project: {
                        category: '$_id',
                        count: 1,
                        total: { $round: ['$totalPrice', 2] },
                        _id: 0
                    }
                }
            ];
            const result = await paymentCollection.aggregate(pipeline).toArray();
            res.send(result)
        })
        // user stat
        app.get('/userhome', verifyJWT, async (req, res) => {
            const email = req.query.email;
            if (!email) {
                res.send([])
            }
            const decodedEmail = req.decoded.email;
            if (email !== decodedEmail) {
                return res.status(403).send({ error: true, message: 'forbidden access' })
            }
            const query = { email: email };
            const menu = await menuCollection.find().toArray();
            const shop = await cartCollection.find(query).toArray();
            const contact = await bookingCollection.find(query).toArray();
            const payment = await paymentCollection.find(query).toArray();
            res.send({ menu, shop, contact, payment })
        })
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Bistro Boss Restaurant is running');
})
app.listen(port, () => {
    console.log(`Bistro Boss Restaurant is running on port ${port}`)
})