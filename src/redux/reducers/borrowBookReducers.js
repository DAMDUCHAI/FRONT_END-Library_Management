import { UPDATE_CODE_BOOK } from "../constant/libraryManager/bookConstant";

import { UPDATE_BOOK_CARD ,UPDATE_CODE_CARD} from "../constant/libraryManager/bookConstant";

const stateDefault = {
MaSach:'',
MaFieuSach:'',
SoLgMuonMax:'',
countBook:0
 
}
const borrowBookReducers = (state = stateDefault,action) => {


    switch(action.type){

        case UPDATE_CODE_BOOK : {
                state.MaSach = action.MaSach;
                return {...state};
        }
        case UPDATE_CODE_CARD : {
            state.MaFieuSach = action.MaFieuSach;
            state.SoLgMuonMax = action.SoLgMuonMax;
            
            return {...state};
    }
        case UPDATE_BOOK_CARD : {
          
            state.countBook=  action.countBook;
         
            return {...state};
    }



        default: return {...state}
    }
}

export default borrowBookReducers