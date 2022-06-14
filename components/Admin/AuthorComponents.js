
import React,{useState,useEffect} from 'react';
import { Table ,Button,Popconfirm} from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { GET_ALL_AUTHOR_SAGA, DELETE_AUTHOR_SAGA} from "../../redux/constant/libraryManager/authorConstants";


import { FormOutlined, DeleteOutlined } from '@ant-design/icons'
import FormEditAuthor from '../Form/Author/FormEditAuthor';
import FormAddAuthor from '../Form/Author/FormAddAuthor';




export default function AuthorComponents() {
  const authorList = useSelector(state => state.authorReducers.authorList);
  const dispatch = useDispatch();
  const [state,setState]=useState({
    filteredInfo: null,
    sortedInfo: null,
  })
  useEffect(() => {
    dispatch({ type: 'SET_WIDTH', widthDrawer: '320' });

    dispatch({ type: GET_ALL_AUTHOR_SAGA })

}, [])
console.log(authorList);
const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };


  let { sortedInfo, filteredInfo } = state;
  sortedInfo = sortedInfo || {};
  filteredInfo = filteredInfo || {};
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      sorter: (item2, item1) => {
          return item2.id - item1.id;
      },
      sortDirections: ['descend'],

  },
    {
      title: 'Ten',
      dataIndex: 'Ten',
      key: 'Ten',
  
      filteredValue: filteredInfo.Ten || null,
      onFilter: (value, record) => record.Ten.includes(value),
      sorter: (a, b) => a.Ten.length - b.Ten.length,
      sortOrder: sortedInfo.columnKey === 'Ten' && sortedInfo.order,
      ellipsis: true,
    },

    {
      title: 'Phone',
      dataIndex: 'Phone',
      key: 'Phone',

    },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'Email',

    },
    {
      title: 'DiaChi',
      dataIndex: 'DiaChi',
      key: 'DiaChi',

    },
    {
      title: 'TieuSu',
      dataIndex: 'TieuSu',
      key: 'TieuSu',

    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (text, record, index) => {
        const ButtonGroups = Button.Group;
          return <div>
            <ButtonGroups >
            <button className="btn mr-2 btn-primary" onClick={() => {
                        const action = {
                            type: 'OPEN_FORM',
                            title:'Edit Author',
                            Component: <FormEditAuthor />,
                        }

                        //dispatch lên reducer nội dung drawer
                        dispatch(action);
                        //dispatch dữ liệu dòng hiện tai lên reducer
                        const actionEditAuthor = {
                            type: 'EDIT_AUTHOR',
                            authorEditModel: record
                        }
                        dispatch(actionEditAuthor);
                    }}>
                        <FormOutlined style={{ fontSize: 17 }} />
                    </button>
                    <Popconfirm
                        title="Are you sure to delete this author?"
                        onConfirm={() => {
                            dispatch({ type: DELETE_AUTHOR_SAGA, id: record.id })
                        }}

                        okText="Yes"
                        cancelText="No"
                    >
                        <button className="btn btn-danger">
                            <DeleteOutlined style={{ fontSize: 17 }} />
                        </button>
                    </Popconfirm>
                </ButtonGroups>
            
           

          </div>
      },
  }
  ];

  return (
    <div className="wrapper" >
    <>

    <Button ghost type="primary" style={{marginBottom:'10px'}}
    onClick={() => {
                        const action = {
                            type: 'OPEN_FORM',
                            title:'Add Author',
                            Component: <FormAddAuthor/>,
                        }
                        dispatch(action);
                      
                    }}>
            Thêm Author
          </Button>
        <Table columns={columns} style={{marginRight:'20px'}} dataSource={authorList} onChange={handleChange} pagination={{ defaultPageSize: 7, showSizeChanger: false, pageSizeOptions: ['10', '20', '30']}} />
      </>
    </div>
  )
}
