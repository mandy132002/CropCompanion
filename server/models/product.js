import mongoose from "mongoose"

const productSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: [true, "Please enter product price"]},
    quantity: {type: String, required: true},
    sellerId:{type:String, required: true }
})

export default mongoose.model('Product', productSchema);