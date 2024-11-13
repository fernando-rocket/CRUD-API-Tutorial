const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')
const app = express()
const PORT = 3001

//middleware
app.use(express.json())

// routes
app.use('/api/products', productRoute)

app.get('/', (req, res)=>{
    res.send("Hello, World!")
})

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})

mongoose.connect(process.env.MONGO_PATH)
.then(() => console.log('Connected!'))
.catch(error => console.log(error.message));

//npm init -y
//npm i express
//add .gitignore
//npm i nodemon -D
//npm i mongodb
//npm i mongoose
//npm i dotenv

// add .env, .env.example, .gitignore(node_modules, .env)
