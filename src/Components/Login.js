import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

class Login extends React.Component{

    state = {
        username:"",
        password:""
    }
    inputHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
        console.log(e.target.value)
    }
    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }
    render(){
        return(
            <>
            {this.props.user? 
            
            <div>
                
                <Redirect to="/signup" />

            </div>
            :
            <form onSubmit = {this.submitHandler}>
             <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.inputHandler} /> 
                <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.inputHandler}/> 
            <input type="submit" value="Login"/>
        </form>
            }
            </>

        )
    }
}

const msp = (state) => {
    console.log("current state", state)
    return { user: state.user}
    


}

export default connect(msp, null)(Login) 