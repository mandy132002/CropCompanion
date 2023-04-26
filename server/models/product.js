import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: [true, 'Please enter product price'] },
  quantity: { type: String, required: true },
  image:{type: String, required:true},
  sellerId: { type: String, required: true },
  bidprice: {
    type: Number,
  },
  bidderName: { type: String, default: "x" },
  open: { type: Boolean, default: true },
  // sold: { type: Boolean, default:false}
});

export default mongoose.model('Product', productSchema);
