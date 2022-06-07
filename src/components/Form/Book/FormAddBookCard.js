import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_BOOK_CARD_SAGA} from "../../../redux/constant/libraryManager/bookConstant";
import {GET_ALL_AUTHOR_SAGA} from '../../../redux/constant/libraryManager/authorConstants'
import {GET_ALL_CATEGORY_SAGA} from '../../../redux/constant/libraryManager/categoryConstants'
import {GET_ALL_BOOKSHELF_SAGA} from '../../../redux/constant/libraryManager/bookshelfConstants'
import {GET_ALL_PUBLISHER_SAGA} from '../../../redux/constant/libraryManager/publisherConstants'
import * as Yup from 'yup';
import { withFormik } from "formik";
import { connect  } from "react-redux";


const FormAddBookCard =(props)=> {


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
    <div className="col-12"> 
    <label for="" class="form-label">Mã thẻ</label>
    <input type="text" className="form-control" name="MaThe"   onChange={handleChange}
        onBlur={handleBlur}
        value={values.MaThe}/></div>
     <div className="col-12"> 
    <label for="" class="form-label">Hạn Trả</label>
    <input type="date" className="form-control" name="HanTra"     onChange={handleChange}
        onBlur={handleBlur}
        value={values.HanTra}/></div>
  </div>
  <div className="row">
  <div className="col-12"> 
    <label for="" class="form-label">Số Lượng Mượn</label>
    <input type="number" className="form-control" name="SoLgMuonMax"  onChange={handleChange}
        onBlur={handleBlur}
        value={values.SoLgMuonMax} /></div>

    </div>


   
    

    </form>


    </>
  )
}


const AddBookCardWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {    
  return {MaThe:'',HanTra:'',SoLgMuonMax:'' } 
},



  // Custom sync validation
  validationSchema: Yup.object().shape({


}),

  handleSubmit: (values , { setSubmitting ,props}) => {
    props.dispatch({
      type:CREATE_BOOK_CARD_SAGA,
      bookCardCreate:values,
  })
  },

  displayName: "FormAddBookCard",
})(FormAddBookCard);

export default connect()(AddBookCardWithFormik);