import React, { useEffect } from 'react'
import { useDispatch,  } from 'react-redux';
import {CREATE_CATEGORY_SAGA} from "../../../redux/constant/libraryManager/categoryConstants";

import * as Yup from 'yup';
import { withFormik } from "formik";
import { connect  } from "react-redux";


const FormAddCategory =(props)=> {


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
     
     </div>

    </form>


    </>
  )
}


const CreateCategoryWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => {    
   
  return { Ten:""} },



  // Custom sync validation
  validationSchema: Yup.object().shape({


}),

  handleSubmit: (values , { setSubmitting ,props}) => {
    
    props.dispatch({
      type:CREATE_CATEGORY_SAGA,
      categoryCreate:values,
  })
console.log("valuse", values);
  },

  displayName: "AddCategoryForm",
})(FormAddCategory);

export default connect()(CreateCategoryWithFormik);