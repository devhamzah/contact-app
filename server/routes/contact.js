import express from "express";
import { getContacts ,saveContact} from "../controllers/contact.js";


const router = express.Router();

router.get('/',getContacts);
router.post('/',saveContact);





export default router;