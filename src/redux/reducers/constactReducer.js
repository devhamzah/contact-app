
const initialState = [];

const contactReducer = (state=initialState,action)=>{
    if(action.type === "TEST"){
        console.log("Reducer Test Cleared !")
    }
    return state;
}
export default contactReducer;