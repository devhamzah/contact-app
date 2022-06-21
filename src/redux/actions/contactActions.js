import * as apis from "../../api/index";


//Fetching all Contact from DataBase 

export const fetchingContacts = () => async (dispatch) => {
    try {
        const allData = await apis.fetchContact();
        const { data } = allData;
        dispatch({ type: "FETCH_ALL_CONTACTS" ,payload:data })
    } catch (error) {
        console.log(error);
    }
} 

export const postContact = (fdata) => async (dispatch) => {
    try {
       const {data} = await apis.saveContact(fdata);
        dispatch({type:"NEW_CONTACT", payload : data});
    } catch (error) {
        console.log(error);
    }
} 