const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json())

// const uri = "mongodb+srv://<username>:<password>@cluster0.5ffrq.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb+srv://:@cluster0.5ffrq.mongodb.net/?retryWrites=true&w=majority";

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