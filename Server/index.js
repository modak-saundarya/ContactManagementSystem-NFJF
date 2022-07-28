const express = require('express')
const mongoose = require('mongoose')
const app = express()

const uri = "mongodb://localhost:27017/CMS"

const connectDb = async ()=>{
    await mongoose.connect(uri);
    const contactSchema = new mongoose.Schema({})
    const contacts = mongoose.model("contacts", contactSchema)
    const data = await contacts.find({});
    console.warn(data);
}


connectDb();

app.listen(4000);