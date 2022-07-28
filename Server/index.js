const express = require('express')
const mongoose = require('mongoose')
const app = express()

const connectDb = async ()=>{
    await mongoose.connect("mongodb+srv://NFJF:nfjf123@cluster0.8vajx.mongodb.net/?retryWrites=true&w=majority/cms");
    const contactSchema = new mongoose.Schema({})
    const contact = mongoose.model("contacts", contactSchema)
    const data = await contact.find({});
    console.warn(data);
}


connectDb();

app.listen(4000);