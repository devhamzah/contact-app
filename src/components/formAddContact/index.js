
import { useSelector,useDispatch } from "react-redux";
import styles from "./index.module.css";
import {toggleForm} from "../../redux/actions/uiAcions";
import { useState } from "react";
import FileBase64 from "react-file-base64";
import { postContact } from "../../redux/actions/contactActions";

const FormAddContact = () => {
    
    const dispatch = useDispatch()
    const {stateFormModal} = useSelector((state)=> state.uiReducer);
    
    const [formData,setFormData]= useState({
        name:"",
        phoneNumber:"",
        email:"",
        image:""
    })
    // console.log(formData)




    const handleSubmit = () => {
        console.log("i am submit the data");
        dispatch(postContact(formData));
    }


    return <section className={styles.sectionForm}>
        <div className={`${styles.formModal} ${stateFormModal ?  styles.formModalActive : ""}`}>
            <div className={styles.card}>
                <h1>Create Contact</h1>
                <div>
                    <input onChange={(e)=> setFormData({...formData, name:e.target.value})} placeholder=" Nmae" type="text" />
                </div>
                <div>
                    <input onChange={(e)=> setFormData({...formData, email:e.target.value})} placeholder=" Email" type="text" />
                </div>
                <div>
                    <input onChange={(e)=> setFormData({...formData,phoneNumber:e.target.value})} placeholder=" Phone Number" type="number" />
                </div>
                <div>
                    <FileBase64 multiple={false} type="file" onDone={({base64})=> setFormData({...formData,image:base64})} />
                </div>
                <div className={styles.formBtn}> 
                    <button onClick={()=> dispatch(toggleForm())} className={`btn ${styles.cancleBtn} `} >Cancle</button>
                    <button onClick={handleSubmit} className={`btn ${styles.submitBtn}`} >Submit</button>
                </div>
            </div>
        </div>
            <div className={`${styles.overlay} ${stateFormModal ?  styles.overlayActive: ""}`}>
            </div>
    </section>
}
export default FormAddContact;