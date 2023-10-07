const express = require('express');
const cors = require('cors');
const app = express()
const categories = require('./data/categories.json');
const news = require('./data/news.json')
const port = 5000;
app.use(cors());

app.get('/', (req, res) => {
  res.send('Dragon News Resources Running')
})

app.get('/categories', (req, res) => {
  res.send(categories);
})

app.get('/news', (req, res) => {
  res.send(news);
})
// specific category news server
app.get('/category/:id', (req, res) => {
  const id = req.params.id;
  if (id === "0") {
    res.send(news);
  } else {
    const categoryNews = news.filter(n => n.category_id === id);
    res.send(categoryNews);
  }
})
// single news server
app.get('/news/:id', (req, res) => {
  const id = req.params.id;
  const singleNews = news.find(n => n._id === id);
  res.send(singleNews);
})

app.listen(port, () => {
  console.log(`Dragon News Resources Running ${port}`)
})