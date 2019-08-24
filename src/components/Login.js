import React, {Component} from 'react';
import './../App.css';
import axios from 'axios';

class Login extends Component{
    constructor(){
        super();
        this.state={
            username:"",
            password:"",
        };
        this.handleInputChange  = this.handleInputChange.bind(this);
        this.handleLogin        = this.handleLogin.bind(this);
    }

    handleLogin(e) {
        e.preventDefault();
        /*this.props.onAddTodo(this.state);*/
        if(this.state.username !== "" &&
           this.state.password !== ""){
            this.state.redirectRegister=true;
            FuncLogin();
        }else{
            alert("Olvidaste llenar uno de los campos!!!");
        }
        this.setState({
            username: '',
            password: '',
        });
    }

    handleInputChange(e) {
        const {value, name} = e.target;
        console.log(value, name);
        this.setState({
          [name]: value
        });
    }

    render(){
      return (
        <div className="App">
          <div className="container" id="login-container">
            <div className="col align-items-center">
              <div className="card">
                <form className="card-body">
                  <div className="form-group">
                    <input
                      id="username"
                      type="text"
                      name="username"
                      className="form-control"
                      value={this.state.username}
                      onChange={this.handleInputChange}
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="password"
                      type="text"
                      name="password"
                      className="form-control"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                      placeholder="Password"
                    />
                  </div>
                  <div className="row">
                    <button
                      id="buttonLogin"
                      //type="submit"
                      className="btn btn-info btn-block"
                      onClick={this.handleLogin}
                      >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }

}


function FuncLogin(){
  
  let email = document.getElementById("username").value;
  var URL = "http://dionisio-env.yenwtnrkxn.us-east-1.elasticbeanstalk.com/GetAccount/"+email;
  axios.get(URL).then(function (response) {
    // handle success
    console.log(response);
  });
  
}


export default Login;
