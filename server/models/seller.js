import mongoose from "mongoose"

const sellerSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role:{type:String, required: true }
    // seller_id: {type: String, required: true}
})

export default mongoose.model('Seller', sellerSchema);