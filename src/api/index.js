import axios from "axios";

const url = 'http://localhost:5000/contact';


// For getiing all consts from mongoose database
export const fetchContact = () => axios.get(url);

// Requestin to add contatact in mongoose database
export const saveContact = (newContact) => axios.post(url, newContact);

// Requestin to delete contaact from mongoose database by id
export const deleteContact = (id) => axios.delete(`${url}/${id}`);