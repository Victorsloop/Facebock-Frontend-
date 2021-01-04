import {combineReducers} from 'redux'
// import { INCREMENT } from './actionTypes'
//Responsible for managing our state, always returns a new state object , SETSTATE MERGEES informaiton this does not 

const defaultState = {
    counter:0,
    user:null,
    posts:[]
    // api: [],
}
function counterReducer(prevState= defaultState.counter, action){
    switch(action.type){
        case "INCREMENT_COUNTER":
        console.log("Reducer before", action)
        console.log("Reducer after", action)
         return ++prevState
         case "DECREMENT_COUNTER":
            console.log("Reducer before", action)
            console.log("Reducer after", action)
             return --prevState
         default:
        return prevState
    }
   
}

function userReducer(prevState= defaultState.user, action){
    switch(action.type){
        case"LOGIN":
            console.log("logging in", action.payload)
            return action.payload
        case"SIGNUP":
            console.log("creating user", action.payload)
            return action.payload
        
        case "GET_USER":
            return action.payload
        case "POST_USER":
            return [...prevState, action.payload]
        case "UPDATE_USER":
            return [...prevState, action.payload]        
        default:

            return prevState
                }
    

}

    
function postsReducer(prevState = defaultState.posts, action){
    switch(action.type){
        case "FETCH_POSTS":
            console.log("IN POST REDUCER", action)
            return action.payload
            case "ADD_POST":
                console.log("IN POST REDUCER", action)
                return prevState
                case "EDIT_POSTS":
                    console.log("IN POST REDUCER", action)
                    return prevState
                    case "DELETE_POSTS":
                        console.log("IN POST REDUCER", action)
                        return prevState
                    default:
                        return prevState
    }
}

//pure functions


const rootReducer =  combineReducers({
    counter: counterReducer,
    user: userReducer,
    posts: postsReducer
    
    // api: apiReducer
})

export default rootReducer 