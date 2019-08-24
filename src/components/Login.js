import React, { Component } from 'react';
import './../App.css';
import axios from 'axios';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    /*this.props.onAddTodo(this.state);*/
    if (this.state.email !== "" &&
      this.state.password !== "") {
      FuncLogin();
    } else {
      alert("Olvidaste llenar uno de los campos!!!");
    }
    this.setState({
      email: '',
      password: ''
    });
  }

  handleInputChange(e) {
    const { value, name } = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container" id="login-container" >
          <div className="col align-items-center" >
            <div className="card" style={{backgroundColor: "#343a40"}}>
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


function FuncLogin() {

  var checker = 0;
  let email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var ROOT = "http://dionisio-env.yenwtnrkxn.us-east-1.elasticbeanstalk.com/";
  var URL = ROOT + "GetAccount/" + email;
  var usuario;
  var id;
  var emailAccount;
  var role;

  var temp;

  try {
    axios.get(URL).then(res => {
      temp = res;

      if (res.status == 200) {
        checker = 1;
        console.log("Primer GET " + checker);
        usuario = res.data.name_ACCOUNT;
        id = res.data.account_ID;
        emailAccount = res.data.email;
        role = res.data.role_ACCOUNT;
        console.log(id + " " + usuario + " " + emailAccount + " " + role + " " + checker);

      } else {
        alert("Correo no registrado.");
      }
    });
  } catch (err) {
    alert("No se ha podido iniciar sesion");
  }


  try {
    setTimeout(() => {

      console.log("El valor despues del primer GET: " + checker);

      if (checker == 1) {
        URL = ROOT + "GetEmail/" + email;
        axios.get(URL).then(res => {
          console.log(res);
          console.log(res.data.password + " | " + password);
          if (res.status = 200 && res.data.password_EMAIL == password) {
            sessionStorage.setItem("id", id);
            sessionStorage.setItem("usuario", usuario);
            sessionStorage.setItem("email", emailAccount);
            sessionStorage.setItem("role", role);
            alert("Sesion iniciada.");

          } else {
            alert("Contraseña incorrecta.")
          }
        });
      }

    }, 2000);
  } catch (err) {
    alert("No se ha podido iniciar sesion");
  }

}


export default Login;
