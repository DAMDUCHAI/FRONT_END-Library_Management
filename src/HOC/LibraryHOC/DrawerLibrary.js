import React from 'react'
import { Drawer, Button, } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
export default function DrawerLibrary() {
    const { visible, ComponentContentDrawer,callBackSubmit,title,widthDrawer } = useSelector(state => state.drawerLibraryReducer);
    console.log('widthDrawer',widthDrawer);
    const dispatch = useDispatch();


    
      const onClose = () => {
        dispatch({ type: 'CLOSE_DRAWER' });
      };
  return (
    <>
    <Drawer
        title={title}
        width={widthDrawer}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}

        footer={
            <div
                style={{
                    textAlign: 'right',
                }}
            >
                <Button onClick={onClose} style={{ marginRight: 8 }}>
                    Cancel
                </Button>
                <Button onClick={callBackSubmit} type="primary">
                    Submit
                </Button>
            </div>
        }
    >
        {/* Nội dung thay đổi của drawer */}
        {ComponentContentDrawer}

    </Drawer>
</>
  )
}
