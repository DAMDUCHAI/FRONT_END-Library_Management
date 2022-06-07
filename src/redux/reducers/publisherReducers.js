import { GET_ALL_PUBLISHER } from "../constant/libraryManager/publisherConstants";


const stateDefault = {
    publisherList:[],
    publisherEdit: {
        id: 0,
        Ten: "",
        Phone: "",
        Email: "",
        DiaChi: "",
        NguoiDaiDien: "",
      }

}
const publisherReducers = (state = stateDefault,action) => {


    switch(action.type){

        case GET_ALL_PUBLISHER: {
                state.publisherList = action.publisherList;
                
                return {...state};
        }
        case  'EDIT_PUBLISHER': {
            console.log(action.publisherEditModel);
            state.publisherEdit = action.publisherEditModel;
            return {...state}
    
        }


        default: return {...state}
    }
}

export default publisherReducers