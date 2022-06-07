import React from 'react'
const initialState = {
    visible: false,
    title:'',
    ComponentContentDrawer: <p>default</p>,
    widthDrawer:'',
    callBackSubmit: (propsValue) => { alert('click demo!') }
}

const drawerLibraryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_WIDTH':
            console.log('hahah',action.widthDrawer);
            return { ...state, widthDrawer: action.widthDrawer }
       
        case 'CLOSE_DRAWER':
            return { ...state, visible: false }
        case 'OPEN_FORM': {
            state.visible = true;
            state.ComponentContentDrawer = action.Component;
            state.title = action.title;
            return { ...state }

        }
        case 'SET_SUBMIT': {
            state.callBackSubmit = action.submitFunction;
            return {...state};
        }

        case 'SET_SUBMIT_CREATE_BOOK' : {
            return {...state,callBackSubmit:action.submitFunction}
        }

        case 'OPEN_FORM_CREATE_TASK' : {
            state.visible = true;
            state.title = action.title;
            state.ComponentContentDrawer = action.Component;
            return {...state};

        }

        

        default:
            return state
    }
}
export default drawerLibraryReducer