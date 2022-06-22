
const initialState = {
    stateFormModal : false,
   stateDeleteModal:"",
}

const uiReducer = (state = initialState,action)=>{
    switch (action.type) {
        case "TOGGLE_FORM_MODAL":
            return state = {...state, stateFormModal : !state.stateFormModal}
        case "TOGGLE_DELETE_MODAL":
            return state = {...state, stateDeleteModal :action.payload}
        default:
            return state;
    }
};
export default uiReducer;