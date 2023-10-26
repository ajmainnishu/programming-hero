const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

// mongodb link
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
    const doctorsCollection = client.db('usersDB').collection('doctors');
    const doctorsPaidCollection = client.db('usersDB').collection('doctorsPaid');
    // doctors get data
    app.get('/doctors', async (req, res) => {
      const result = await doctorsCollection.find().toArray();
      res.send(result);
    })
    // single doctor info get
    app.get('/doctors/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await doctorsCollection.findOne(query);
      // console.log(result)
      res.send(result);
    })
    // doctors post data
    app.post('/doctors', async (req, res) => {
      const data = req.body;
      const doc = {
        img: data.photo,
        name: data.name,
        place: data.place,
        time: data.time,
        Price: data.price,
        expert: data.expert
      }
      const result = await doctorsCollection.insertOne(doc);
      res.send(result);
    })
    // get specific email data
    app.get('/doctorsPaid', async (req, res) => {
      let query = {};
      if (req.query?.email) {
        query = { email: req.query.email}
      }
      const cursor = await doctorsPaidCollection.find(query).toArray();
      res.send(cursor);
    })
    // post doctor pay data
    app.post('/doctorsPaid', async (req, res) => {
      const data = req.body;
      const result = await doctorsPaidCollection.insertOne(data);
      res.send(result);
    })
    // update status
    app.put('/doctorsPaid/:id', async (req, res) => {
      const id = req.params.id;
      const data = req.body.status;
      const query = { _id: new ObjectId(id) }
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          status: data
        }
      }
      const result = await doctorsPaidCollection.updateOne(query, updateDoc, options);
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
  res.send('Mediva Doctors Chamber Running')
})

app.listen(port, () => {
  console.log(`Mediva Doctors Chamber Running on port ${port}`)
})