import {INCREMENT,FETCH_POSTS, LOGIN} from './actionTypes'
//Functions that reutrn actions, hold all our actions that return 
export function incrementCounter(){
    return {type:INCREMENT}
}

// export function fetchPosts(){
//     console.log("IN FETCH ACTION")
//     return function(dispatch,getState ){
//         fetch("http://localhost:5000/posts")
//         .then(r => r.json())
//         .then(arrayOfPosts => {
//             dispatch({type: FETCH_POSTS, payload: arrayOfPosts})
//         })
//         .catch(console.log)
//     }
//      }
//         }   

export function fetchPosts(){
    console.log("IN FETCH ACTION")
    return function (dispatch, getState){
        fetch("http://localhost:5000/posts")
        .then(r => r.json())
        .then (arrayOfPost => {
            dispatch({type: FETCH_POSTS, payload : arrayOfPost})
        })
        .catch(console.log)
    }
}


export function loginUser(userObj) {
    return function(dispatch, getState){
        fetch('http://localhost:5000/login', {
            method: "POST",
            headers: {
                "Accepts": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({ user: userObj })
        })
            .then(r => r.json())
            .then(checkedUserObj => {
                console.log("checkedUserObj:",checkedUserObj)
                localStorage.setItem("token", checkedUserObj.jwt)
                dispatch({type: LOGIN, payload: checkedUserObj.user})
            })
            .catch(console.log)
    }
}