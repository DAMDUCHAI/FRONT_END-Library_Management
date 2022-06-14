import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import {UPDATE_PUBLISHER_SAGA} from '../../../redux/constant/libraryManager/publisherConstants'

import * as Yup from 'yup';
import { withFormik } from "formik";
import { connect  } from "react-redux";


const FormEditPublisher =(props)=> {


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
    <label for="" class="form-label">Người đại diện</label>
    <input type="text" className="form-control" name="NguoiDaiDien"   onChange={handleChange}
        onBlur={handleBlur}
        value={values.NguoiDaiDien}/></div>
     </div>

    </form>


    </>
  )
}


const EditPublisherWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {    
    const { publisherEdit } = props;
    console.log(publisherEdit);
  return { Ten:publisherEdit.Ten,Phone:publisherEdit.Phone,Email:publisherEdit.Email,DiaChi:publisherEdit.DiaChi,NguoiDaiDien:publisherEdit.NguoiDaiDien} },



  // Custom sync validation
  validationSchema: Yup.object().shape({


}),

  handleSubmit: (values , { setSubmitting ,props}) => {
    console.log('values',values);
    props.dispatch({
      type:UPDATE_PUBLISHER_SAGA,
      publisherUpdate:values,
      idPublisher: props.publisherEdit.id,
  })
 
  },

  displayName: "  EditPublisherForm",
})(FormEditPublisher);
const mapStateToProps = (state) => ({

  publisherEdit: state.publisherReducers.publisherEdit

})
export default connect(mapStateToProps)(EditPublisherWithFormik);