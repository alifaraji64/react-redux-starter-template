import { createStore } from 'redux'

const initialState = {
    posts:[
        {title:"title-1",id:1}
    ],
    signUpModal:{
        open: false
    }
}

const reducer = (state=initialState, action)=>{
    if(action.type === "ADD_POST"){
        return Object.assign({}, state,{
            posts: state.posts.concat(action.payload)
        })
    }
    if(action.type === "DELETE_POST"){
        return Object.assign({}, state,{
            posts: [
                ...state.posts.slice(0, action.payload.index),
                ...state.posts.slice(action.payload.index+1, state.posts.length)
            ]
        })
    }
    return state
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store