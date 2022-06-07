import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {CREATE_READER_SAGA} from "../../../redux/constant/libraryManager/readerConstants";
import {GET_ALL_GENDER_SAGA} from "../../../redux/constant/libraryManager/genderConstants";

import * as Yup from 'yup';
import { withFormik } from "formik";
import { connect  } from "react-redux";


const FormAddReader =(props)=> {


  const dispatch = useDispatch();
      //componentdidmount
      useEffect(() => {

        //Load sự kiện submit lên drawer nút submit
        dispatch({ type: 'SET_SUBMIT', submitFunction: handleSubmit });
        dispatch({ type: GET_ALL_GENDER_SAGA })
    }, [])
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
  } = props;
  const listGender=useSelector(state => state.genderReducers.genderList);

  const renderOptionGender=()=>{
    return listGender.map((gender,index)=>{
      return  <option key={index} value={gender.id}>
      {gender.NoiDung}
  </option>
    })
  }
  return (

    <>
    <form onSubmit={handleSubmit}>
  
  <div className="row">
    <div className="col-6"> 
    <label for="" class="form-label">Tên</label>
    <input type="text" className="form-control" name="Ten"   onChange={handleChange}
        onBlur={handleBlur}
        value={values.Ten}/></div>
     <div className="col-6"> 
    <label for="" class="form-label">Email</label>
    <input type="text" className="form-control" name="Email"     onChange={handleChange}
        onBlur={handleBlur}
        value={values.Email}/></div>

  
  <div className="col-6"> 
    <label for="" class="form-label">Dia Chi</label>
    <input type="text" className="form-control" name="DiaChi"  onChange={handleChange}
        onBlur={handleBlur}
        value={values.DiaChi} /></div>
    <div className="col-6"> 
    <label for="" class="form-label">Phone</label>
    <input type="text" className="form-control" name="Phone"  onChange={handleChange}
        onBlur={handleBlur}
        value={values.Phone} /></div>

  <div className="col-6"> 
    <label for="" class="form-label">CCCD</label>
    <input type="text" className="form-control" name="CCCD" onChange={handleChange}
        onBlur={handleBlur}
        value={values.CCCD} /></div>
    


  <div className="col-6"> 
  <div>
  <label htmlFor="">Ngày Sinh</label>
  <input type="date" className="form-control" name="NgaySinh" onChange={handleChange}
        onBlur={handleBlur}
        value={values.NgaySinh} />
</div>

  </div>
  

  <div className="col-6"> 
  <div>
  <label htmlFor="">Gioi Tinh</label>
  <select className="form-control" name="MaGioiTinh" value={values.MaGioiTinh} onChange={handleChange}>
                            {renderOptionGender()}
                        </select>
</div>

  </div>

  <div className="col-6"> 
    <label for="" class="form-label">Mã Thẻ Sinh Viên</label>
    <input type="text" className="form-control" name="MaSinhVien" onChange={handleChange}
        onBlur={handleBlur}
        value={values.MaSinhVien} /></div>


<div className="col-6"> 
    <label for="" class="form-label">Ngày Cấp</label>
    <input type="date" className="form-control" name="NgayCap" onChange={handleChange}
        onBlur={handleBlur}
        value={values.NgayCap} /></div>

<div className="col-6"> 
    <label for="" class="form-label">HSD</label>
    <input type="date" className="form-control" name="HSD" onChange={handleChange}
        onBlur={handleBlur}
        value={values.HSD} /></div>
  </div>

    </form>


    </>
  )
}


const CreateReaderWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => {    

  return {MaSinhVien:"", NgaySinh:"",Ten:"",DiaChi:"",Phone:"",Email:"",CCCD:"",MaGioiTinh:"",HSD:"",NgayCap:""} },



  // Custom sync validation
  validationSchema: Yup.object().shape({


}),

  handleSubmit: (values , { setSubmitting ,props}) => {


  props.dispatch({
      type:CREATE_READER_SAGA,
      values:values
      
  })
console.log(values);

  },

  displayName: "AddPublisherForm",
})(FormAddReader);

export default connect()(CreateReaderWithFormik);