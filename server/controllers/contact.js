import ContactStore from "../models/contact.js";


//Getting list of saved contact from Database
export const getContacts = async (req,res) =>{
    try {
        const allContacts = await ContactStore.find();
        res.status(200).json(allContacts);
    } catch (error) {
        res.status(404).json({err:error});
    }
}