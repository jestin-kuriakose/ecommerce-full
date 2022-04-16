const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
var cors = require('cors')
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const authProduct = require('./routes/product')

const app = express()

app.use(express.json());
app.use(cors())

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("DB connection successfull"))
.catch((err) => console.log(err))

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/products', authProduct);


app.listen(5000, () => console.log(`Server running successfully`))