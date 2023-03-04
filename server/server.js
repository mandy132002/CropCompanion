import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

import sellerRoutes from './routes/seller.js'
import customerRoutes from './routes/customer.js'

const app = express();
dotenv.config();

app.use(bodyParser.json({limit:"30 mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30 mb", extended: true}));
app.use(cors());

app.use('/seller', sellerRoutes);
app.use('/customer', customerRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewURLParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));