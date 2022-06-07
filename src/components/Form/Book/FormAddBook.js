import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_BOOK_SAGA} from "../../../redux/constant/libraryManager/bookConstant";
import {GET_ALL_AUTHOR_SAGA} from '../../../redux/constant/libraryManager/authorConstants'
import {GET_ALL_CATEGORY_SAGA} from '../../../redux/constant/libraryManager/categoryConstants'
import {GET_ALL_BOOKSHELF_SAGA} from '../../../redux/constant/libraryManager/bookshelfConstants'
import {GET_ALL_PUBLISHER_SAGA} from '../../../redux/constant/libraryManager/publisherConstants'
import * as Yup from 'yup';
import { withFormik } from "formik";
import { connect  } from "react-redux";

import { Select } from 'antd';
const FormAddBook =(props)=> {

const { Option } = Select;
  const dispatch = useDispatch();
      //componentdidmount
      useEffect(() => {

        //Gọi api load project category 
        dispatch({ type: GET_ALL_AUTHOR_SAGA })
        dispatch({ type:GET_ALL_BOOKSHELF_SAGA})
        dispatch({ type: GET_ALL_CATEGORY_SAGA })
        dispatch({ type: GET_ALL_CATEGORY_SAGA })
        dispatch({ type:   GET_ALL_PUBLISHER_SAGA })
      

        
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
    const authorList = useSelector(state => state.authorReducers.authorList);
    const categortList = useSelector(state => state.categoryReducers.categoryList);
    const bookshelfList = useSelector(state => state.bookshelfReducers.bookshelfList);
    const publisherList = useSelector(state => state.publisherReducers.publisherList);


    
 const renderOptionCategory=()=>{
  return categortList.map((category,index)=>{
    return  <option key={index} value={category.id}>
    {category.Ten}
</option>
  })
}

const renderOptionBookshelf=()=>{
  return bookshelfList.map((bookshelf,index)=>{
    return  <option key={index} value={bookshelf.id}>
    {bookshelf.Ten}
</option>
  })
}

const renderOptionPublisher=()=>{
  return publisherList.map((publisher,index)=>{
    return  <option key={index} value={publisher.id}>
    {publisher.Ten}
</option>
  })
}

const renderOptionAuthor=()=>{
  return authorList.map((author,index)=>{
    return  <option key={index} value={author.id}>
    {author.Ten}
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
    <label for="" class="form-label">Năm Xuất bản</label>
    <input type="text" className="form-control" name="NamXB"     onChange={handleChange}
        onBlur={handleBlur}
        value={values.NamXB}/></div>
  </div>
  <div className="row">
  <div className="col-3"> 
    <label for="" class="form-label">Giá</label>
    <input type="text" className="form-control" name="Gia"  onChange={handleChange}
        onBlur={handleBlur}
        value={values.Gia} /></div>
    <div className="col-3"> 
    <label for="" class="form-label">Số lượng đầu sách</label>
    <input type="text" className="form-control" name="SoLgDauSach"  onChange={handleChange}
        onBlur={handleBlur}
        value={values.SoLgDauSach} /></div>

  <div className="col-3"> 
    <label for="" class="form-label">Số lượng hiện tại</label>
    <input type="text" className="form-control" name="SoLgHienTai" onChange={handleChange}
        onBlur={handleBlur}
        value={values.SoLgHienTai} /></div>
    <div className="col-3"> 
    <label for="" class="form-label">ảnh sách</label>
    <input type="text" className="form-control" name="AnhSach" onChange={handleChange}
        onBlur={handleBlur}
        value={values.AnhSach} /></div>
  </div>
  <div className="row">
  <div className="col-12"> 
  <div>
  <label htmlFor="">Nội dung</label>
  <textarea className="form-control" name="NoiDung" rows={2} defaultValue={""}  onChange={handleChange}
        onBlur={handleBlur}
        value={values.NoiDung} />
</div>

  </div>
</div>

<div className="row">
  <div className="col-6">
  <label htmlFor="">Tác giả</label>
                        <select className="form-control" name="MaTacGia" value={values.MaTacGia} onChange={handleChange}>
                            {renderOptionAuthor()}
                        </select>
  </div>


  <div className="col-6">
  <label htmlFor="">Nhà xuất bản</label>
                        <select className="form-control" name="MaNXB" value={values.MaNXB} onChange={handleChange}>
                            {renderOptionPublisher()}
                        </select>
  </div>



  <div className="col-6">
  <label htmlFor="">Kệ sách</label>
                        <select className="form-control" name="MaKeSach" value={values.MaKeSach} onChange={handleChange}>
                            {renderOptionBookshelf()}
                        </select>
  </div>



  <div className="col-6">
  <label htmlFor="">Thể loại</label>
                        <select className="form-control" name="MaTheLoai" value={values.MaTheLoai} onChange={handleChange}>
                            {renderOptionCategory()}
                        </select>
  </div>
</div>


    </form>


    </>
  )
}


const CreateBookWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => {    
   
  return { Ten:"", NamXB: "",Gia: "",SoLgHienTai:"",SoLgDauSach:"",MaTacGia:"",MaNXB:"",MaKeSach:"",MaTheLoai:"",AnhSach:"",NoiDung:"", } },



  // Custom sync validation
  validationSchema: Yup.object().shape({


}),

  handleSubmit: (values , { setSubmitting ,props}) => {
    
    props.dispatch({
      type:CREATE_BOOK_SAGA,
      bookCreate:values,
  })
console.log("valuse", values);
  },

  displayName: "EditBookForm",
})(FormAddBook);

export default connect()(CreateBookWithFormik);