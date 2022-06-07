import { call, put, takeLatest,delay } from "redux-saga/effects";
import { PublisherServices } from "../../../services/publisherServices";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_PUBLISHER,GET_ALL_PUBLISHER_SAGA,CREATE_PUBLISHER_SAGA,UPDATE_PUBLISHER_SAGA ,DELETE_PUBLISHER_SAGA} from "../../constant/libraryManager/publisherConstants";
import { notifiFunction } from "../../../util/Notification/notificationLibrary"
import { DISPLAY_LOADING, HIDE_LOADING } from "../../constant/settingCommon/loadingConstants";






function *getListPublisherSaga(action) { 
    try {
        yield put({
            type: DISPLAY_LOADING
        })
        yield delay (500);
        const {data,status} = yield call( () => PublisherServices.getAllPublisher());
     
   
     if(status === STATUS_CODE.SUCCESS) {
            yield put({
                type:GET_ALL_PUBLISHER,
                publisherList:data
            })
        }
        yield put({
            type: HIDE_LOADING
        })
    }catch(err) {
        console.log(err)
    }

}

export function* followGetListPublisherSaga() {
    yield takeLatest(GET_ALL_PUBLISHER_SAGA, getListPublisherSaga);
}



//Create category
function* createPublisherSaga(action) {

    try {

        console.log(action.categoryCreate);
        const { data, status } = yield call(() => PublisherServices.createPublisher(action.publisherCreate));
        notifiFunction('success','Add publisher successfully !')

        // if (status === STATUS_CODE.SUCCESS) {
            console.log(data)

            // history.push('/projectmanagement');
        // }
    
   
        yield put({
            type:'CLOSE_DRAWER'
        })
        yield call(getListPublisherSaga);
    } catch (err) {
        console.log(err);
    }
   

}


export function* followCreatePublisherSaga() {
    yield takeLatest(CREATE_PUBLISHER_SAGA, createPublisherSaga);
}



//Update Category
function* updatePublisherSaga(action) {
    console.log('update saga',action.idCategory);
    try {

        
        const { data, status } = yield call(() => PublisherServices.updatePublisher(action.idPublisher,action.publisherUpdate));
        notifiFunction('success','Update publisher successfully !')

        if (status === STATUS_CODE.SUCCESS) {
            console.log(data)

            // history.push('/projectmanagement');
        }
    
   
        yield put({
            type:'CLOSE_DRAWER'
        })
        yield call(getListPublisherSaga);
    } catch (err) {
        console.log(err);
    }
   

}


export function* followUpdatePublisherSaga() {
    yield takeLatest(UPDATE_PUBLISHER_SAGA, updatePublisherSaga);
}


//delete category by id
function *deletePublisherSaga(action) { 
    try {
        const { data, status } = yield call(() => PublisherServices.deletePublisher(action.id));
     
   
    //  if(status === STATUS_CODE.SUCCESS) {
        console.log(action.id)

            notifiFunction('success','Delete publisher successfully !')
        // }

    yield call(getListPublisherSaga);
    }catch(err) {
        
        console.log(err)
        notifiFunction('error','Delete publisher fail !');
    }

}

export function* followDeletePublisherSaga() {
    yield takeLatest(DELETE_PUBLISHER_SAGA, deletePublisherSaga);
}
