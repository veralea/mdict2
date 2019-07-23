import React, { Component } from 'react';
import './Password.css';


class Password extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            link: '/'
        }
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.checkPassword = this.checkPassword.bind(this);
    }

    onUsernameChange(event){
        this.setState({username: event.target.value});
    }

    onPasswordChange(event){
        this.setState({password: event.target.value});
    }

    checkPassword(){
        if(this.state.username === "theacher" && this.state.password === "11111"){
            this.setState({link: '/MainTheacherPage'})
        }
        else if(this.state.username === "student" && this.state.password === "11111"){
            this.setState({link: '/MainStudentPage'})
        }
        else{
            alert ("username: "+this.state.username+"\npassword: "+this.state.password+"\nentrance isn't allow");
        }
    }

    render(){
        return(
            <div className="flexContainer">
                
                <form >
                
                    <div dir="ltr">
                        <h1>here will be password</h1>
                        <div>
                            USERNAME:  <input name="username"  type="text" placeholder='username: "theacher" or "student"'
                               value={this.state.username} onChange={this.onUsernameChange}/>
                        </div>
                        <div>
                            PASSWORD:   <input name="password"  type="password" placeholder='password: "11111"'
                               value={this.state.password} onChange={this.onPasswordChange}/>
                        </div>
                        <div className="button"><a href={this.state.link} onClick={this.checkPassword}>ENTRANCE</a></div>
                    </div>    
                </form>
            </div>    
        )
    }
}

export default Password;    