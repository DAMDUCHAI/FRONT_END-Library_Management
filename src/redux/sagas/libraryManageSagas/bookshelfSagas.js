import { call, put, takeLatest,delay } from "redux-saga/effects";
import { BookshelfServices } from "../../../services/bookshelfServices";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_BOOKSHELF,GET_ALL_BOOKSHELF_SAGA } from "../../constant/libraryManager/bookshelfConstants";
import { DISPLAY_LOADING, HIDE_LOADING } from "../../constant/settingCommon/loadingConstants";







function *getListBookshelfSaga(action) { 
    try {
        yield put({
            type: DISPLAY_LOADING
        })
        yield delay (500);
        const {data,status} = yield call( () => BookshelfServices.getAllBookshelf());
     
   
     if(status === STATUS_CODE.SUCCESS) {
            yield put({
                type:GET_ALL_BOOKSHELF,
                bookshelfList:data
            })
        }
        yield put({
            type: HIDE_LOADING
        })
    }catch(err) {
        console.log(err)
    }

}

export function* followGetListBookshelfSaga() {
    yield takeLatest(GET_ALL_BOOKSHELF_SAGA, getListBookshelfSaga);
}


