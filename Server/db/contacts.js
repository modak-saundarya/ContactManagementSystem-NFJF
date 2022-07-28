const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const { BOOLEAN } = require('sequelize');

const contactsSchema = new mongoose.Schema({
    
    FirstName: String,
    LastName: String,
    DOB: {type: Date},
    Address: String,
    City: String,
    Pincode: String,
    ContactNo: String,
    Email: String,
    isDeleted: Boolean
});


module.exports = mongoose.model("contacts", contactsSchema)