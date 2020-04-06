const express = require('express');
const routes = require('./routes')
const mongoose = require('mongoose')
const app = express();
const cors = require('cors')
const path = require('path')

mongoose.connect('mongodb+srv://well:bta456@simples-suffb.azure.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes)


app.listen(4001,(req, res)=>{
    console.log("Servidor rodando na porta 4001")
}) 