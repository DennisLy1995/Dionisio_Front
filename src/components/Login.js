import React, {Component} from 'react';
import './../App.css';
import axios from 'axios';

class Login extends Component{
    constructor(){
        super();
        this.state={
            email:"",
            password:"",
        };
        this.handleInputChange  = this.handleInputChange.bind(this);
        this.handleLogin        = this.handleLogin.bind(this);
    }

    handleLogin(e) {
        e.preventDefault();
        /*this.props.onAddTodo(this.state);*/
        if(this.state.email !== ""){
            this.state.redirectRegister=true;
            FuncLogin();
        }else{
            alert("Olvidaste llenar uno de los campos!!!");
        }
        this.setState({
            email: ''
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
                      id="email"
                      type="text"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                      placeholder="Email"
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

  var response;
  
  let email = document.getElementById("email").value;
  var URL = "http://dionisio-env.yenwtnrkxn.us-east-1.elasticbeanstalk.com/GetAccount/"+email;
  console.log(URL);
  axios.get(URL).then(res => {
    
    response = res;
  
  });
  
}


export default Login;
