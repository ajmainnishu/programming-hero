//--------Connect to cloud database and Send data to database-------





// const express = require('express');
// const { MongoClient } = require('mongodb');
// const app = express();
// const port = 5000;
// const uri = "";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     const collection = client.db("foodMaster").collection("users");
//     // console.log('hitting the database')
//     // console.log(err)
//     const user = {name: 'Opu Bissas', email: 'opu@gmail.com', phone: '0170000000'}
//     collection.insertOne(user)
//     .then(() => {
//         console.log('insert success')
//     })
//     // client.close();
// });
// app.get('/', (req, res) => {
//     res.send('Hello World');
// })
// app.listen(port)





// const express = require('express');
// const { MongoClient } = require('mongodb');
// const app = express();
// const port = 5000;
// const uri = "";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// async function run() {
//     try {
//         await client.connect();
//         const database = client.db("foodMaster");
//         const usersCollection = database.collection("users");
//         const doc = {
//             name: "Special One",
//             email: "special@hotmail.com",
//         }
//         const result = await usersCollection.insertOne(doc);
//         console.log(`A document was inserted with the _id: ${result.insertedId}`);
//         } finally {
//         await client.close();
//         }
//     }
//     run().catch(console.dir);
// app.get('/', (req, res) => {
//     res.send('Hello World');
// })
// app.listen(port)