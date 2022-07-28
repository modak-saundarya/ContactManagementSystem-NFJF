import express from "express";
import cors from "cors";
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import contactsRoutes from "./Routes/contacts.js";

const app = express();

app.use('/contacts', contactsRoutes)

app.use(bodyParser.json({extended: true}));

app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

const CONNECTION_URL = 'mongodb+srv://NFJF:nfjf123@cluster0.8vajx.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL)
    .then(()=> app.listen(PORT, ()=>console.log('Server running on port: ' + PORT)))
    .catch((error)=> console.log(error.message))
