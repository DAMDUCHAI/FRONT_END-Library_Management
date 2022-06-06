
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import bookReducers from './reducers/bookReducers'
import authorReducers from './reducers/authorReducers'
import bookshelfReducers from './reducers/bookshelfReducers'
import categoryReducers from './reducers/categoryReducers'
import publisherReducers from './reducers/publisherReducers'
import drawerLibraryReducer from './reducers/drawerLibraryReducers'
import loadingReducers from './reducers/loadingReducers'
import createSagaMiddleware from 'redux-saga';
import {rootSagas} from './sagas/rootSagas';
import borrowBookReducers from './reducers/borrowBookReducers'
import readerReducers from './reducers/readerReducers'
import genderReducers from './reducers/genderReducer'
import acountReducers from './reducers/acountReducers'
import libraryCardReducers from './reducers/libraryCardReducers'
import informationReducers from './reducers/informationReducers'

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
  // here we will be adding reducers
  bookReducers,
  authorReducers,
  bookshelfReducers,
  categoryReducers,
  publisherReducers,
  drawerLibraryReducer,
  loadingReducers,
  borrowBookReducers,
  readerReducers,
  genderReducers,
  acountReducers,
  libraryCardReducers,
  informationReducers
})
const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false,
      immutableCheck: false,
      serializableCheck: false
    }).concat(sagaMiddleware)}
)
sagaMiddleware.run(rootSagas);
export default store;