
import styles from "./index.module.css";

const Contact = ({contact}) =>{
    return <div className={styles.contactBody}>
        <div className={styles.contactName}>
            <img src={contact.image} alt="" />
            <span>{contact.name}</span>
        </div>
        <div><p>{contact.phoneNumber}</p></div>
        <div className={styles.mail}><p>{contact.email}</p></div>
        <div className={styles.contactBtnsDiv}>
            <button className={styles.editBtn}>Edit</button>
            <button className={styles.removeBtn}>Remove</button>
        </div>
    </div>
}
export default Contact;