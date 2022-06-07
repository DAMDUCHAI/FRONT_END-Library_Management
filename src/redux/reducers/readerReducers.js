import { GET_ALL_READER } from "../constant/libraryManager/readerConstants";


const stateDefault = {
    readerList:[],
    readerEdit: {
        id: 0,
        Ten: "",
        
      },

}

const readerReducers = (state = stateDefault,action) => {


    switch(action.type){

        case  GET_ALL_READER: {
                state.readerList = action.readerList;
                
                return {...state};
        }

        case  'EDIT_READER': {
            state.readerEdit = action.readerEditModel;
            return {...state}
    
        }
      
        default: return {...state}
    }
}

export default readerReducers