import { GET_ALL_BOOKSHELF } from "../constant/libraryManager/bookshelfConstants";


const stateDefault = {

    bookshelfList:[],
    bookshelfEdit: {
        id: 0,
        Ten: "",
        
      }
 
}
const bookshelfReducers = (state = stateDefault,action) => {


    switch(action.type){

        case GET_ALL_BOOKSHELF : {
                state.bookshelfList = action.bookshelfList;
                
                return {...state};
        }
   
        case  'EDIT_BOOKSHELF': {
            state.bookshelfEdit = action.bookshelEditModel;
            return {...state}
    
        }


        default: return {...state}
    }
}

export default bookshelfReducers