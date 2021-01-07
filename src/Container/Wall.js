import React, { Component } from 'react'
import FilterPost from '../Components/FilterPost'
import {connect} from 'react-redux'
import { fetchPosts } from '../Redux/actions'
import AddPost from '../Components/AddPost'
import Post from '../Components/Post'

class Wall extends Component {

    state ={
        filterPost: "",
        postArray : [],
        beenClicked:false,
        user:null,
        newPostArray : []

    }

    // componentDidMount(){
    //     console.log("HITTING THIS WALL")
    //     this.props.getPosts()
    //     }


    componentDidMount(){
        fetch("http://localhost:5000/api/v1/posts")
        .then(r => r.json())
        .then (arrayOfPost => {
            this.setState({newPostArray:arrayOfPost})
            console.log("IN WALL DIDMOUNT SHOWING ARRAY",this.state.newPostArray)
        })
        .catch(console.log)
    }

    // componentDidUpdate( prevState) {
    //     if (prevState.newPostArray !== this.state.newPostArray) {
    //       console.log('array up2DATE')
    //     //   this.componentDidMount()
    //     }
    //   }

    filterHandler = (e) => {
        this.setState({filterPost: e.target.value})
    }

    renderPostForm = () => {
        if(this.state.beenClicked){
            return (< AddPost rerender={this.newRenderPosts} />)
        }
    }

    postClickHandler = () => {
        this.setState((prevState) => ({beenClicked: !prevState.beenClicked}))
    }

    renderPosts = () => {
        
        
            
        // fetch("http://localhost:5000/api/v1/posts")
        // .then(r => r.json())
        // .then (arrayOfPost => {
        //     console.log("FETCHING POSTS", arrayOfPost)
        //     this.setState( {
        //         postArray: arrayOfPost
        //     })
        // })
        // .catch(console.log)
            
        
        console.log("render posts", this.props.postArray)

        return this.props.postArray.map(post => <Post key={post.id} postObj={post} user={this.props.user}/>)
    }
    
    newRenderPosts = () => {
        return this.state.newPostArray.map(post => <Post key={post.id} postObj={post} user={this.props.user}/>)

    }


    render() {
        console.log("wall.js props",this.props)
        return (


            <>
                { localStorage.token ?

                <>
                
                < FilterPost filter={this.state.filterPost} filterHandler={this.filterHandler}/>
                <button onClick={this.postClickHandler}>{this.state.beenClicked? "Dont feel like Posting": "Show The World"}</button>
                 {this.renderPostForm()}
                {this.newRenderPosts()}
                {/* {this.renderPosts()} */}
                
                </>
                
                :

                <>
                <h1>not logged in</h1>

                </>        
                }
            </>
            
            // <>
            
            // {this.props.user.posts.forEach(post => { <Post content={post.content } /> } )}
            // </>

        )
    }
}

function msp(state){

    console.log("current state in msp in wall.js", state.user)
    return { user: state.user}
    // return { user: state.user, postArray: state.user.posts}
    


}

function mdp(dispatch){
    return{
        getPosts: () => dispatch(fetchPosts())
        // createPost: (newPostObject) => dispatch(addPost(newPostObject))
    
    }
    
}



export default connect(msp,mdp)(Wall) 


