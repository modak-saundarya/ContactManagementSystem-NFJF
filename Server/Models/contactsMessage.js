import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    FirstName: String,
    LastName: String,
    DOB: {type: Date},
    Address: String,
    City: String,
    Pincode: String,
    ContactNo: String,
    Email: String,
});

const ContactMessage = mongoose.model('ContactMessage', contactSchema);

export default ContactMessage;