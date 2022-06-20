
import { useSelector,useDispatch } from "react-redux";
import styles from "./index.module.css";
import {toggleForm} from "../../redux/actions/uiAcions";

const FormAddContact = () => {
    const dispatch = useDispatch()
    const {stateFormModal} = useSelector((state)=> state.uiReducer);
    console.log(stateFormModal)
    return <section className={styles.sectionForm}>
        <div className={`${styles.formModal} ${stateFormModal ?  styles.formModalActive : ""}`}>
            <div className={styles.card}>
                <h1>Create Contact</h1>
                <div>
                    <input placeholder=" Nmae" type="text" />
                </div>
                <div>
                    <input placeholder=" Email" type="text" />
                </div>
                <div>
                    <input placeholder=" Phone Number" type="number" />
                </div>
                <div>
                    <input className={styles.fileInput} id="file" type="file" />
                </div>
                <div className={styles.formBtn}> 
                    <button onClick={()=> dispatch(toggleForm())} className={`btn ${styles.cancleBtn} `} >Cancle</button>
                    <button className={`btn ${styles.submitBtn}`} >Submit</button>
                </div>
            </div>
        </div>
            <div className={`${styles.overlay} ${stateFormModal ?  styles.overlayActive: ""}`}>
            </div>
    </section>
}
export default FormAddContact;