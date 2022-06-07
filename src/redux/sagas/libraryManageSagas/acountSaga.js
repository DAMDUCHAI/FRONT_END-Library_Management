import { call, put, takeLatest ,delay} from "redux-saga/effects";
import { AcountServices } from "../../../services/acountServices";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_ACOUNT,GET_ALL_ACOUNT_SAGA,CREATE_ACOUNT_SAGA,UPDATE_ACOUNT_SAGA,DELETE_ACOUNT_SAGA } from "../../constant/libraryManager/acountConstants";








// function *getListAcount(action) { 
//     try {

//         const {data,status} = yield call( () => AcountServices.getAllAcount());
     
   
//      if(status === STATUS_CODE.SUCCESS) {
//             yield put({
//                 type:GET_ALL_ACOUNT,
//                 categoryList:data
//             })
          
//         }
//     }catch(err) {
//         console.log(err)
//     }

// }

// export function* followGetListAcount() {
//     yield takeLatest(GET_ALL_ACOUNT_SAGA, getListAcount);
// }



//Create category
function* createAcount(action) {

    try {


        const { data, status } = yield call(() => AcountServices.createAcount(action.acountCreate));
     
        yield put({
            type:'UPDATE_CODE_ACOUNT',
            MaAcountAdd:data.id
        })
  

    } catch (err) {
        console.log(err);
    }
   

}


export function* followCreateAcount() {
    yield takeLatest(CREATE_ACOUNT_SAGA, createAcount);
}



// //Update Category
// function* updateAcount(action) {

//     try {

        
//         const { data, status } = yield call(() => AcountServices.updateAcount(action.idCategory,action.categoryUpdate));

//         if (status === STATUS_CODE.SUCCESS) {
//             console.log(data)

//             // history.push('/projectmanagement');
//         }
    
   
    

//     } catch (err) {
//         console.log(err);
//     }
   

// }


// export function* followUpdateAcount() {
//     yield takeLatest(UPDATE_ACOUNT_SAGA, updateAcount);
// }





// //delete category by id
// function *deleteAcount(action) { 
//     try {
//         const { data, status } = yield call(() => AcountServices.deleteAcount(action.id));
     
   
//     //  if(status === STATUS_CODE.SUCCESS) {
//         console.log(action.id)

//         // }

  
//     }catch(err) {
        
//         console.log(err)
     
//     }

// }

// export function* followDeleteAcount() {
//     yield takeLatest(DELETE_ACOUNT_SAGA, deleteAcount);
// }






