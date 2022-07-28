const { response } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const contacts = require('./db/contacts')
const app = express()

const uri = "mongodb://localhost:27017/CMS"

const connectDb = async ()=>{
    await mongoose.connect(uri);
}


connectDb();

app.post("/add-contact",async (req, resp)=>{
let Contacts = new contacts(req.body);
let result = await Contacts.save();
resp.send(result)
})

app.get("/contacts", async(req, res)=>{
    const contact = await contacts.find();
    if(contact.length > 0){
        res.send(contact)
    }else{
        res.send({result:"No contact found"})
    }
})

app.listen(4000);