
import styles from "./index.module.css";
import Contact from "../contact";
import { useSelector } from "react-redux";
const Contacts = () => {
    const store = useSelector((state)=> state.contactReducer);
    if(store.length !== 0){
        return <section>
        <div className={styles.contacts}>
           {store.map((contact)=> {
            return <Contact contact={contact} key={contact._id} />
           } )}
        </div>
    </section>
    }
}
export default Contacts;