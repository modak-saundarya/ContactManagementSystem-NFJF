const { response } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const contacts = require('./db/contacts')
const cors = require('cors')
const app = express()

const uri = "mongodb://localhost:27017/CMS"

const connectDb = async ()=>{
    await mongoose.connect(uri);
}


connectDb();

app.use(bodyParser.json())

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

app.post("/add-contact",async (req, resp)=>{
let Contacts = new contacts(req.body);
let result = await Contacts.save();
resp.send(result)
});

app.get("/contacts", async(req, res)=>{
    const contact = await contacts.find();
    if(contact.length > 0){
        res.send(contact)
    }else{
        res.send({result:"No contact found"})
    }
});

app.delete("/contact/:id", async(req, resp)=>{
    const result = await contacts.deleteOne({_id:req.params.id})
    resp.send(result);
});

app.put("/contact/:id", async (req, res) =>{
    let result = await contacts.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )
    res.send(result)
})

app.listen(4000);