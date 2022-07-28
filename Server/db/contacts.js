const mongoose = require('mongoose');

const contactsSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    DOB: {type: Date},
    Address: String,
    City: String,
    Pincode: String,
    ContactNo: String,
    Email: String
});


module.exports = mongoose.model("contacts", contactsSchema)