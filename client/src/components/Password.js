import React, { Component } from "react";
import "./Password.css";

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      language: "RU",
      link: "/",
      isRegisterd: false,
      error:''
    };
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    // this.onLanguageChange = this.onLanguageChange.bind(this);
    this.register = this.register.bind(this);
    this.showErrorMsg = this.showErrorMsg.bind(this);
   
  }

  componentDidMount() {
    fetch('http://localhost:8000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ test: 'test' }), // body data type must match "Content-Type" header
    })
      .then(response => response.json())
      .then(res => {
        this.showErrorMsg(res.error)
      }).catch(err => console.error(err))
  }
  onUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  // onLanguageChange(event) {
  //   this.setState({ language: event.target.value });
  // }

  // checkPassword() {
  //   let passwordObj = this.state;
  //   passwordObj.email = this.state.username;

  //   fetch("/auth/login", {
  //     method: "POST",
  //     body: JSON.stringify(passwordObj),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(response => console.dir(response))
  //     .catch(error => console.error("Error:", error));
  // }
  

  showErrorMsg(error) {
    this.setState({ error: error })
    setTimeout(() => {
      this.setState({ error: '' })
    }, 5000)
  }
  register(e) {
    e.preventDefault()

    let loginObj = {
      email: e.currentTarget.elements.email.value,
      password: e.currentTarget.elements.password.value,
      password2: e.currentTarget.elements.password2.value
    }
    if (loginObj.password !== loginObj.password2) {
      this.showErrorMsg("The password do not match");
    } else {
      if (e.currentTarget.elements.email.value) {
        fetch('http://localhost:8000/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',            
          },
          body: JSON.stringify(loginObj), // body data type must match "Content-Type" header
        })
          .then(response => response.json())
          .then(res => {
            console.log(res)
            if (res.error) {
              this.showErrorMsg(res.error)
            }
            if (res.isRegisterd) {
              this.setState({isRegisterd:true})
            }
          }).catch(err => console.error(err))
      }
    }
  }

  render() {
    return (
      <div className="flexContainer">
        <h1>Welcome to Mdict</h1>
        {!this.state.isRegisterd ?
          <form onSubmit={this.register}>

            <h2>Register</h2>
            <input
              name="email"
              type="text"
              placeholder='email'
           
            />
            <input
              name="password"
              type="password"
              placeholder='password'           
            />
            <input
              name="password2"
              type="password"
              placeholder='retype password'
            />     
            {this.state.error?
              <div className='errorMsg'>{this.state.error}</div>
              :
              <div />
            }
            <button type='submit' className='button'>Register</button>
          </form>
          :
          <form onSubmit={this.login}>

            <h2>Login</h2>
            <input
              name="email"
              type="text"
              placeholder='email'

            />
            <input
              name="password"
              type="password"
              placeholder='password'

            />
            LANGUAGE:{" "}
            <select
              name="language"
            >
              <option>RU</option>
              <option>EN</option>
              <option>FR</option>
            </select>
           
            <button type='submit' className='button'>Login</button>
          </form>
        }

      </div>
    );
  }
}

export default Password;
