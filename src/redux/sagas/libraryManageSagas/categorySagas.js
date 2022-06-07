import { call, put, takeLatest ,delay} from "redux-saga/effects";
import { CategoryServices } from "../../../services/categoryServices";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_CATEGORY,GET_ALL_CATEGORY_SAGA,CREATE_CATEGORY_SAGA,UPDATE_CATEGORY_SAGA,DELETE_CATEGORY_SAGA } from "../../constant/libraryManager/categoryConstants";

import { notifiFunction } from "../../../util/Notification/notificationLibrary"
import { DISPLAY_LOADING, HIDE_LOADING } from "../../constant/settingCommon/loadingConstants";






function *getListCategorySaga(action) { 
    try {
        yield put({
            type: DISPLAY_LOADING
        })
        yield delay (500);
        const {data,status} = yield call( () => CategoryServices.getAllCategory());
     
   
     if(status === STATUS_CODE.SUCCESS) {
            yield put({
                type:GET_ALL_CATEGORY,
                categoryList:data
            })
            yield put({
                type: HIDE_LOADING
            })
        }
    }catch(err) {
        console.log(err)
    }

}

export function* followGetListCategorySaga() {
    yield takeLatest(GET_ALL_CATEGORY_SAGA, getListCategorySaga);
}



//Create category
function* createCategorySaga(action) {

    try {

        console.log(action.categoryCreate);
        const { data, status } = yield call(() => CategoryServices.createCategory(action.categoryCreate));
        notifiFunction('success','Add category successfully !')

        // if (status === STATUS_CODE.SUCCESS) {
            console.log(data)

            // history.push('/projectmanagement');
        // }
    
   
        yield put({
            type:'CLOSE_DRAWER'
        })
        yield call(getListCategorySaga);
    } catch (err) {
        console.log(err);
    }
   

}


export function* followCreateCategorySaga() {
    yield takeLatest(CREATE_CATEGORY_SAGA, createCategorySaga);
}



//Update Category
function* updateCategorySaga(action) {
    console.log('update saga',action.idCategory);
    try {

        
        const { data, status } = yield call(() => CategoryServices.updateCategory(action.idCategory,action.categoryUpdate));
        notifiFunction('success','Update category successfully !')

        if (status === STATUS_CODE.SUCCESS) {
            console.log(data)

            // history.push('/projectmanagement');
        }
    
   
        yield put({
            type:'CLOSE_DRAWER'
        })
        yield call(getListCategorySaga);
    } catch (err) {
        console.log(err);
    }
   

}


export function* followUpdateCategorySaga() {
    yield takeLatest(UPDATE_CATEGORY_SAGA, updateCategorySaga);
}





//delete category by id
function *deleteCategorySaga(action) { 
    try {
        const { data, status } = yield call(() => CategoryServices.deleteCategory(action.id));
     
   
    //  if(status === STATUS_CODE.SUCCESS) {
        console.log(action.id)

            notifiFunction('success','Delete category successfully !')
        // }

    yield call(getListCategorySaga);
    }catch(err) {
        
        console.log(err)
        notifiFunction('error','Delete book fail !');
    }

}

export function* followDeleteCategorySaga() {
    yield takeLatest(DELETE_CATEGORY_SAGA, deleteCategorySaga);
}






