
const initialState = {
    stateFormModal : false
}

const uiReducer = (state = initialState,action)=>{
    switch (action.type) {
        case "TOGGLE_FORM_MODAL":
            return state = {...state, stateFormModal : !state.stateFormModal}
        default:
            return state;
    }
};
export default uiReducer;