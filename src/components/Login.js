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
        if(this.state.email !== "" &&
        this.state.password !== ""){
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
                  <div className="form-group">
                    <input
                      id="password"
                      type="password"
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

  let email = document.getElementById("email").value;
  var ROOT = "http://dionisio-env.yenwtnrkxn.us-east-1.elasticbeanstalk.com/";
  var URL = ROOT + "GetAccount/"+email;
  console.log(URL);
  axios.get(URL).then(res => {
    if(res.status == 200){
      sessionStorage.setItem("id", res.data.account_ID);
      sessionStorage.setItem("usuario", res.data.name_ACCOUNT);
      sessionStorage.setItem("email", res.data.email);
      sessionStorage.setItem("role", res.data.role_ACCOUNT);

      URL = ROOT + "/getEmailByID/"+ email;
      axios.get().then(res => {

        console.log(res);

      });


    }else{
      alert("Correo no registrado.");
    }
  
  });
  
}


export default Login;
