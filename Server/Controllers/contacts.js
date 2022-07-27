import ContactMessage from "../Models/contactsMessage.js"
export const getContacts = async (req, res)=>{
    try {
        const contactMessages = await ContactMessage.find();

        res.status(200).json(contactMessages)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createContacts = async (req, res)=>{
    const contact = req.body

    const newContact = new ContactMessage(contact);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}