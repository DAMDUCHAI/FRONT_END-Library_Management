import React, { useEffect } from 'react'
import { useDispatch,} from 'react-redux';
import { UPDATE_AUTHOR_SAGA} from "../../../redux/constant/libraryManager/authorConstants";

import * as Yup from 'yup';
import { withFormik } from "formik";
import { connect  } from "react-redux";

const FormEditAuthor =(props)=> {


  const dispatch = useDispatch();
      //componentdidmount
      useEffect(() => {

        //Load sự kiện submit lên drawer nút submit
        dispatch({ type: 'SET_SUBMIT', submitFunction: handleSubmit });
    }, [])
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
     
  } = props;
  

  return (

    <>
       <form onSubmit={handleSubmit}>
  
  <div className="row">
  <div className="col-12"> 
  <label for="" class="form-label">Tên</label>
  <input type="text" className="form-control" name="Ten"   onChange={handleChange}
      onBlur={handleBlur}
      value={values.Ten}/></div>
      <div className="col-12"> 
  <label for="" class="form-label">Phone</label>
  <input type="text" className="form-control" name="Phone"   onChange={handleChange}
      onBlur={handleBlur}
      value={values.Phone}/></div>
         <div className="col-12"> 
  <label for="" class="form-label">Email</label>
  <input type="text" className="form-control" name="Email"   onChange={handleChange}
      onBlur={handleBlur}
      value={values.Email}/></div>
         <div className="col-12"> 
  <label for="" class="form-label">Địa chỉ</label>
  <input type="text" className="form-control" name="DiaChi"   onChange={handleChange}
      onBlur={handleBlur}
      value={values.DiaChi}/></div>
         <div className="col-12"> 
  <label for="" class="form-label">Tieu Su</label>
  <input type="text" className="form-control" name="TieuSu"   onChange={handleChange}
      onBlur={handleBlur}
      value={values.TieuSu}/></div>
   </div>
  </form>


    </>
  )
}


const EditAthorWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {    
    const { authorEdit } = props;
    console.log(authorEdit);
  return {Ten:"",Phone:"",Email:"",DiaChi:"",TieuSu:"", } },



  // Custom sync validation
  validationSchema: Yup.object().shape({


}),

  handleSubmit: (values , { setSubmitting ,props}) => {
    console.log('values',values);
    props.dispatch({
      type:UPDATE_AUTHOR_SAGA,
      authorUpdate:values,
      idAuthor: props.authorEdit.id,
  })
  },

  displayName: "EditAuthorForm",
})(FormEditAuthor);
const mapStateToProps = (state) => ({

  authorEdit: state.authorReducers.authorEdit

})
export default connect(mapStateToProps)(EditAthorWithFormik);