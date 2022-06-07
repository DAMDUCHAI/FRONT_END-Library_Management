import { call, put, takeLatest,delay } from "redux-saga/effects";
import { ReaderServices } from "../../../services/readerServices";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_READER,GET_ALL_READER_SAGA,CREATE_READER_SAGA,UPDATE_READER_SAGA ,DELETE_READER_SAGA} from "../../constant/libraryManager/readerConstants";
import { notifiFunction } from "../../../util/Notification/notificationLibrary"
import { DISPLAY_LOADING, HIDE_LOADING } from "../../constant/settingCommon/loadingConstants";
import { InformationCommonServices } from "../../../services/informationCommonServices";
import { LibraryCardServices } from "../../../services/libraryCardServices";
import { AcountServices } from "../../../services/acountServices";




function *getListReaderSaga(action) { 
    try {
        yield put({
            type: DISPLAY_LOADING
        })
        yield delay (500);
        const {data,status} = yield call( () => ReaderServices.getAllReader());
     
   
     if(status === STATUS_CODE.SUCCESS) {
            yield put({
                type:GET_ALL_READER,
                readerList:data
            })
        }
        yield put({
            type: HIDE_LOADING
        })
    }catch(err) {
        console.log(err)
    }

}

export function* followGetListReaderSaga() {
    yield takeLatest(GET_ALL_READER_SAGA, getListReaderSaga);
}



//Create category
function* createReaderSaga(action) {

    try {
        const information = yield call(() => InformationCommonServices.createInformationCommon(action.values));
    
        const acount = yield call(() => AcountServices.createAcount(action.values));
const libraryCard = yield call(() => LibraryCardServices.createLibraryCard(action.values));


const readerCreate={
    MaThongTinChung:information.data.id,
    MaAcount:acount.data.id,
    MaThe:libraryCard.data.id
};

        const { data, status } = yield call(() => ReaderServices.createReader(readerCreate));
        notifiFunction('success','Add reader successfully !')

        if (status === STATUS_CODE.SUCCESS) {
            console.log(data)
            notifiFunction('success','Add reader successfully !')
            
        }
    
   
        yield put({
            type:'CLOSE_DRAWER'
        })
        yield put({
            type: 'EDIT_LIBRARY_CARD',
            libraryCardEditModel:libraryCard.data
        })
        yield put({
            type: 'EDIT_INFORMATION',
            informationEditModel:information.data
        })
        yield put({
            type: 'EDIT_ACOUNT',
            libraryCardEditModel:acount.data
        })
        yield call(getListReaderSaga);
    } catch (err) {
        console.log(err);
    }
   

}


export function* followCreateReaderSaga() {
    yield takeLatest(CREATE_READER_SAGA, createReaderSaga);
}



//Update Category
function* updateReaderSaga(action) {
    console.log('update saga',action.idCategory);
    try {

        
        const { data, status } = yield call(() => ReaderServices.updateReader(action.idReader,action.readerUpdate));
        notifiFunction('success','Update reader successfully !')

        if (status === STATUS_CODE.SUCCESS) {
            console.log(data)

            // history.push('/projectmanagement');
        }
    
   
        yield put({
            type:'CLOSE_DRAWER'
        })
        yield call(getListReaderSaga);
    } catch (err) {
        console.log(err);
    }
   

}


export function* followUpdateReaderSaga() {
    yield takeLatest(UPDATE_READER_SAGA, updateReaderSaga);
}


//delete category by id
function *deleteReaderSaga(action) { 
    try {
        const { data, status } = yield call(() => ReaderServices.deleteReader(action.id));
     
   
    //  if(status === STATUS_CODE.SUCCESS) {
        console.log(action.id)

            notifiFunction('success','Delete reader successfully !')
        // }

    yield call(getListReaderSaga);
    }catch(err) {
        
        console.log(err)
        notifiFunction('error','Delete reader fail !');
    }

}

export function* followDeleteReaderSaga() {
    yield takeLatest(DELETE_READER_SAGA, deleteReaderSaga);
}
