import { call, put, takeLatest ,delay} from "redux-saga/effects";
import { BookServices } from "../../../services/bookServices";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_BOOK,GET_ALL_BOOK_SAGA,DELETE_BOOK_SAGA ,UPDATE_BOOK_SAGA,CREATE_BOOK_SAGA,CREATE_BOOK_CARD_SAGA,ADD_BOOK_INTO_CARD_SAGA,UPDATE_CODE_CARD} from "../../constant/libraryManager/bookConstant";
import { notifiFunction } from "../../../util/Notification/notificationLibrary"
import { DISPLAY_LOADING, HIDE_LOADING } from "../../constant/settingCommon/loadingConstants";
import { UPDATE_BOOK_CARD } from "../../constant/libraryManager/bookConstant";

function *getListBookSaga(action) { 
    try {
        yield put({
            type: DISPLAY_LOADING
        })
        yield delay (500);

        const {data,status} = yield call( () => BookServices.getAllBook());
  
   
     if(status === STATUS_CODE.SUCCESS) {
            yield put({
                type:GET_ALL_BOOK,
                bookList:data
            })
        }
        yield put({
            type: HIDE_LOADING
        })
    }catch(err) {
        console.log(err)
    }

}

export function* followGetListBookSaga() {
    yield takeLatest(GET_ALL_BOOK_SAGA, getListBookSaga);
}


//delete book by id
function *deleteBookSaga(action) { 
    try {
        const { data, status } = yield call(() => BookServices.deleteBook(action.id));
     
   
    //  if(status === STATUS_CODE.SUCCESS) {
        console.log(action.id)

            notifiFunction('success','Delete book successfully !')
        // }

    yield call(getListBookSaga);
    }catch(err) {
        
        console.log(err)
        notifiFunction('error','Delete book fail !');
    }

}

export function* followDeleteBookSaga() {
    yield takeLatest(DELETE_BOOK_SAGA, deleteBookSaga);
}





//UpdateProject
function* updateBookSaga(action) {
    console.log('update saga',action.idBook);
    try {

        
        const { data, status } = yield call(() => BookServices.updateBook(action.idBook,action.bookUpdate));
        notifiFunction('success','Update book successfully !')

        if (status === STATUS_CODE.SUCCESS) {
            console.log(data)

            // history.push('/projectmanagement');
        }
    
   
        yield put({
            type:'CLOSE_DRAWER'
        })
        yield call(getListBookSaga);
    } catch (err) {
        console.log(err);
    }
   

}


export function* followUpdateBookSaga() {
    yield takeLatest(UPDATE_BOOK_SAGA, updateBookSaga);
}






function* createBookSaga(action) {

    try {

        
        const { data, status } = yield call(() => BookServices.createBook(action.bookCreate));
        notifiFunction('success','Add book successfully !')

        // if (status === STATUS_CODE.SUCCESS) {
            console.log(data)

            // history.push('/projectmanagement');
        // }
    

        yield put({
            type:'CLOSE_DRAWER'
        })
        yield call(getListBookSaga);
    } catch (err) {
        console.log(err);
    }
   

}

export function* followCreateBookSaga() {
    yield takeLatest(CREATE_BOOK_SAGA, createBookSaga);
}





// CREATE_BOOK_CARD_SAGA

function* createBookCardSaga(action) {
console.log(action.bookCardCreate);
    try {
        const { data } = yield call(() => BookServices.createBookCard(action.bookCardCreate));
        notifiFunction('success','Add book card successfully !, you can add book into card')

        // if (status === STATUS_CODE.SUCCESS) {
            console.log(data)

            // history.push('/projectmanagement');
        // }
    
   
        yield put({
            type:'CLOSE_DRAWER'
        })
        yield put({
            type:UPDATE_CODE_CARD,
            MaFieuSach:data.id,
            SoLgMuonMax:data.SoLgMuonMax
        })
        yield put({ type: UPDATE_BOOK_CARD ,countBook:0});
        yield call(getListBookSaga);
    } catch (err) {
        console.log(err);
    }
   

}


export function* followCreateBookCardSaga() {
    yield takeLatest(CREATE_BOOK_CARD_SAGA, createBookCardSaga);
}




function* createBorrowBookSaga(action) {
        try {
            if(action.MaFieuSach===''){
                notifiFunction('warning','You need create card first!')
                return;
            }
            let borrowBook={MaSach:action.MaSach,MaFieuSach:action.MaFieuSach}
            let SoLgMuonMax =action.SoLgMuonMax
            let MaFieuSach =action.MaFieuSach
            let countBook =action.countBook
            if(countBook===SoLgMuonMax){
          
                notifiFunction('warning',`Số lượng mượn sách tối đa là :${SoLgMuonMax}`)
                return;
            }
            yield put({ type: UPDATE_BOOK_CARD ,countBook:countBook+1});
         
            console.log('SoLgMuonMax :',SoLgMuonMax);
            console.log('MaFieuSach :',MaFieuSach);
            const { data } = yield call(() => BookServices.createBorowbook(borrowBook));
            notifiFunction('success','Add book into card successfully !')
    
            // if (status === STATUS_CODE.SUCCESS) {
                console.log(data)
    
                // history.push('/projectmanagement');
            // }
        
 
            yield call(getListBookSaga);
        } catch (err) {
            console.log(err);
        }
       
    
    }
    
    
    export function* followCreateBorrowBookSaga() {
        yield takeLatest(ADD_BOOK_INTO_CARD_SAGA, createBorrowBookSaga);
    }
    