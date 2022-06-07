import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import {UPDATE_CATEGORY_SAGA} from '../../../redux/constant/libraryManager/categoryConstants'

import * as Yup from 'yup';
import { withFormik } from "formik";
import { connect  } from "react-redux";


const FormEditCategory =(props)=> {


  const dispatch = useDispatch();
     
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
      setValues,
      setFieldValue
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
        </div>
  
    </form>


    </>
  )
}


const EditCategoryWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {    
    const { categoryEdit } = props;
    console.log(categoryEdit);
  return { Ten:categoryEdit.Ten} },



  // Custom sync validation
  validationSchema: Yup.object().shape({


}),

  handleSubmit: (values , { setSubmitting ,props}) => {
    
    props.dispatch({
      type:UPDATE_CATEGORY_SAGA,
      categoryUpdate:values,
      idCategory: props.categoryEdit.id,
  })
 
  },

  displayName: "EditCategoryForm",
})(FormEditCategory);
const mapStateToProps = (state) => ({

  categoryEdit: state.categoryReducers.categoryEdit

})
export default connect(mapStateToProps)(EditCategoryWithFormik);