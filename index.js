const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const ShopItem = require('./models/shopItem')
const port = process.env.PORT || 3010;

const URI = `mongodb+srv://${process.env.username}:${process.env.password}@mongofirst.sd25r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const app = express()

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
  console.log('database connected');
  app.listen(port, () => {
    console.log('listening 3010');
  })
})

app.use(express.static('public'))
app.set('view engine', 'ejs')

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// parse application/json
app.use(express.json())

app.get('/', (req, res) => {
  // const newItem = new ShopItem({
  //   url: "https://images.unsplash.com/photo-1586923109404-7bd976ed3e52?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  //   price: 10,
  //   product_name: "kafffee",
  //   company: "bosch"
  // })
  // newItem.save()
  //   .then(result => console.log(result))
  //   .catch(err => console.log(err))
  ShopItem.find()
    .then(result => {
      console.log(result);
      res.render('pages/index', { result })
    })
    .catch(err => console.log(err))
})

app.get('/item/:id', (req, res) => {
  ShopItem.findById(req.params.id)
    .then(result => {
      res.render('pages/item_details', { result })
    })
})

app.get('/add_product', (req, res) => {
  res.render('pages/add_product')
})

app.post('/newItem', (req, res) => {
  // console.log(req.body);
  const newItem = new ShopItem({
    img_link: req.body.pUrl,
    price: Number(req.body.itemPrice),
    product_name: req.body.pname,
    company: req.body.cname,
    shop_link: req.body.shopUrl
  })
  newItem.save()
    .then(result => res.redirect('/'))
    .catch(err => console.log(err))
})

app.get('/delete/:id', (req, res) => {
  ShopItem.findByIdAndDelete(req.params.id)
    .then(result => res.redirect('/'))
    .catch(err => console.log(err))
})

app.get('/update/:id', (req, res) => {
  ShopItem.findById(req.params.id)
    .then(result => {
      res.render('pages/update_product', { result })
    })
    .catch(err => console.log(err))
})

app.post('/updateItem/:id', (req, res) => {
  ShopItem.findByIdAndUpdate(req.params.id, { img_link: req.body.pUrl, product_name: req.body.pname, company: req.body.cname, shop_link: req.body.shopUrl, price: req.body.itemPrice })
    .then(result => res.redirect('/'))
    .catch(err => console.log(err))
})
