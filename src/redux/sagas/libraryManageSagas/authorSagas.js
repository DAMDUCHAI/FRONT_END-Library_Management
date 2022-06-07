import { call, put, takeLatest,delay } from "redux-saga/effects";
import { AuthorServices } from "../../../services/authorServices";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_AUTHOR,GET_ALL_AUTHOR_SAGA ,CREATE_AUTHOR_SAGA,UPDATE_AUTHOR_SAGA,DELETE_AUTHOR_SAGA} from "../../constant/libraryManager/authorConstants";
import { notifiFunction } from "../../../util/Notification/notificationLibrary"
import { DISPLAY_LOADING, HIDE_LOADING } from "../../constant/settingCommon/loadingConstants";






function *getListAuthorSaga(action) { 

    try {
        yield put({
            type: DISPLAY_LOADING
        })
        yield delay (500);
        const {data,status} = yield call( () => AuthorServices.getAllAuthor());
    
   
     if(status === STATUS_CODE.SUCCESS) {
            yield put({
                type:GET_ALL_AUTHOR,
                authorList:data
            })
        }
        yield put({
            type: HIDE_LOADING
        })
    }catch(err) {
        console.log(err)
    }

}
export function* followGetListAuthorSaga() {
    yield takeLatest(GET_ALL_AUTHOR_SAGA, getListAuthorSaga);
}





//Create category
function* createAuthorSaga(action) {
     console.log(action.authorCreate);
    try {

        console.log(action.authorCreate);
        const { data, status } = yield call(() => AuthorServices.createAuthor(action.authorCreate));
        notifiFunction('success','Add author successfully !')

        // if (status === STATUS_CODE.SUCCESS) {
            console.log(data)

            // history.push('/projectmanagement');
        // }
    
   
        yield put({
            type:'CLOSE_DRAWER'
        })
        yield call(getListAuthorSaga);
    } catch (err) {
        console.log(err);
    }
   

}


export function* followCreateAuthorSaga() {
    yield takeLatest(CREATE_AUTHOR_SAGA, createAuthorSaga);
}



//Update Category
function* updateAuthorSaga(action) {
    console.log('update saga',action.idAuthor);
    try {

        
        const { data, status } = yield call(() => AuthorServices.updateAuthor(action.idAuthor,action.authorUpdate));
        notifiFunction('success','Update author successfully !')

        if (status === STATUS_CODE.SUCCESS) {
            console.log(data)

            // history.push('/projectmanagement');
        }
    
   
        yield put({
            type:'CLOSE_DRAWER'
        })
        yield call(getListAuthorSaga);
    } catch (err) {
        console.log(err);
    }
   

}


export function* followUpdateAuthorSaga() {
    yield takeLatest(UPDATE_AUTHOR_SAGA, updateAuthorSaga);
}


//delete category by id
function *deleteAuthorSaga(action) { 
    try {
        const { data, status } = yield call(() => AuthorServices.deleteAuthor(action.id));
     
   
    //  if(status === STATUS_CODE.SUCCESS) {
        console.log(action.id)

            notifiFunction('success','Delete author successfully !')
        // }

    yield call(getListAuthorSaga);
    }catch(err) {
        
        console.log(err)
        notifiFunction('error','Delete author fail !');
    }

}

export function* followDeleteAuthorSaga() {
    yield takeLatest(DELETE_AUTHOR_SAGA, deleteAuthorSaga);
}


