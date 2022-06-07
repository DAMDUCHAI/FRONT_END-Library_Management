const stateDefault = {

    acountEdit: {
        id: 0,
        Email: "",
        PassWord: "",
        Role: "",
        
      }
}

const acountReducers = (state = stateDefault,action) => {


    switch(action.type){
        case  'EDIT_ACOUNT': {
            state.acountEdit = action.acountEditModel;
            return {...state} 
        }

        default: return {...state}
    }
}

export default acountReducers