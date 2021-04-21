const mongoose = require('mongoose')
const { Schema } = mongoose;

const shopItemSchema = new Schema({
  img_link: String,
  price: {
    type: Number,
    required: true
  },
  product_name: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  shop_link: {
    type: String,
    required: true,
  }
}, { timestamps: true })

const ShopItem = mongoose.model('designShopDb', shopItemSchema)
module.exports = ShopItem;
