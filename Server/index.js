const express = require('express')
const mongoose = require('mongoose')
const app = express()
const contacts = require("./db/contacts")

const uri = "mongodb://localhost:27017/CMS"

// const connectDb = async ()=>{
//     await mongoose.connect(uri);
//     const contactSchema = new mongoose.Schema({})
//     const contacts = mongoose.model("contacts", contactSchema)
//     const data = await contacts.find({});
//     console.warn(data);
// }


// connectDb();

app.post("/add-contact",async (req, resp)=>{
let contacts = new contacts(req.body);
let result = await contacts.save();
resp.send(result)
})

app.listen(4000);