const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

// mongodb server link
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
    const volunteersCollection = client.db('usersDB').collection('volunteers');
    const eventsCollection = client.db('usersDB').collection('events');
    const registerCollection = client.db('usersDB').collection('register');
    // get volunteers data from mongodb
    app.get('/volunteers', async (req, res) => {
      const result = await volunteersCollection.find().toArray();
      res.send(result);
    })
    // post volunteers data from mongodb
    app.post('/volunteers', async (req, res) => {
      const data = req.body;
      const result = await volunteersCollection.insertOne(data);
      res.send(result);
    })
    // events get
    app.get('/events', async (req, res) => {
      const result = await eventsCollection.find().toArray();
      res.send(result);
    })
    // events post
    app.post('/events', async (req, res) => {
      const data = req.body;
      const result = await eventsCollection.insertOne(data);
      res.send(result);
    })
    // events delete
    app.delete('/events/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await eventsCollection.deleteOne(query);
      res.send(result);
    })
    // register get
    app.get('/register', async (req, res) => {
      const result = await registerCollection.find().toArray();
      res.send(result);
    })
    // register post
    app.post('/register', async (req, res) => {
      const data = req.body;
      const result = await registerCollection.insertOne(data);
      res.send(result);
    })
    // register delete
    app.delete('/register/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await registerCollection.deleteOne(query);
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
  res.send('Volunteer Network Running')
})

app.listen(port, () => {
  console.log(`Volunteer Network Running on port ${port}`)
})