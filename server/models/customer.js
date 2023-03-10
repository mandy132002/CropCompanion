import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
})

export default mongoose.model('Customer', customerSchema);