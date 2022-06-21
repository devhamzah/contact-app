
import NavBar from "./components/navbar/index";
import FormAddContact from "./components/formAddContact";
import Contacts from "./components/contacts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {fetchingContacts} from "./redux/actions/contactActions";

const App=()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchingContacts())
    },[dispatch]);
return <>
    <FormAddContact/> 
    <NavBar/>
    <Contacts/>
</>
}
export default App;