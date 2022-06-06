import { all } from "redux-saga/effects";
import * as bookSaga from './libraryManageSagas/bookSagas'
import * as authorSaga from './libraryManageSagas/authorSagas'
import * as bookshelfSaga from './libraryManageSagas/bookshelfSagas'
import * as publisherSaga from './libraryManageSagas/publisherSagas'
import * as categorySaga from './libraryManageSagas/categorySagas'
import * as readerSaga from './libraryManageSagas/readerSaga'
import * as genderSaga from './libraryManageSagas/genderSaga'

export function* rootSagas() {

  yield all([
    //Nghiệp vụ theo dõi các action saga todolist

 

    

 
  ])

  
}