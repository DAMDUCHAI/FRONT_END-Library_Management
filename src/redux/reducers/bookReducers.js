import { GET_ALL_BOOK } from "../constant/libraryManager/bookConstant";


const stateDefault = {

    bookList:[],
    bookEdit: {
        id: 0,
        Ten: "",
        MaTacGia: 0,
        MaTheLoai: 0,
        MaNXB:0,
        AnhSach: "",
        NamXB: "",
        Gia: "",
        SoLgDauSach: 0,
        SoLgHienTai: 0,
        NoiDung: "",
      }
}
const bookReducers = (state = stateDefault,action) => {


    switch(action.type){

        case GET_ALL_BOOK: {
                state.bookList = action.bookList;
                
                return {...state};
        }

        case  'EDIT_BOOK': {
            console.log(action.bookEditModel);
            state.bookEdit = action.bookEditModel;
            return {...state}
    
        }

        default: return {...state}
    }
}

export default bookReducers