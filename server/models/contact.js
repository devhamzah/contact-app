import mongoose from "mongoose";


const contactScheema = mongoose.Schema({
    name:String,
    phoneNumber:String,
    email:String,
    createdAt:{
        type:Date,
        default:new Date()
    }

});

const ContactStore = mongoose.model("contactStore",contactScheema);

export default ContactStore;