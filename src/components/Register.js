import React, {Component} from 'react';
import './../App.css';
import axios from 'axios';

class Register extends Component{
    constructor(){
        super();
        this.state={
            name:"",
            lastname:"",
            email:""
        };

        this.handleInputChange  = this.handleInputChange.bind(this);
        this.handleLogin        = this.handleLogin.bind(this);
        this.handleRegister     = this.handleRegister.bind(this);
    };

    handleRegister(e) {
        e.preventDefault();
        /*this.props.onAddTodo(this.state);*/
        if(this.state.email!=="" && 
        this.state.lastname!=="" && 
        this.state.name!==""){
            FuncRegister();
        }else{
            alert("Quedaron campos vacios.!");
        }
        this.setState({
            name:"",
            lastname:"",
            email:""
        });
    }

    handleLogin(e) {
        e.preventDefault();
        /*this.props.onAddTodo(this.state);*/
        alert("Debo renderizar el login");
        this.setState({
            name:"",
            lastname:"",
            email:""
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
        return  (
            <div className="App">
                <div className="container" id="register-container">
                    <div className="col align-items-center">
                        <div className="justify-content-center">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                </div>
                                <div className="panel-body card">
                                    <form role="form" className="card-body">
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        className="form-control"
                                                        value={this.state.name}
                                                        onChange={this.handleInputChange}
                                                        placeholder="Name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        id="lastname"
                                                        name="lastname"
                                                        className="form-control"
                                                        value={this.state.lastname}
                                                        onChange={this.handleInputChange}
                                                        placeholder="Lastname"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="form-control"
                                                value={this.state.email}
                                                onChange={this.handleInputChange}
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        id="role_account"
                                                        name="role_account"
                                                        className="form-control"
                                                        value={"User"}
                                                        onChange={this.handleInputChange}
                                                        placeholder="User"
                                                        disabled
                                                    />
                                                </div>
                                        </div>
                                        </div>
                                        <div className="row">
                                            <button
                                                type="submit"
                                                className="btn btn-info btn-block"
                                                onClick={this.handleRegister}>
                                                Register
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

function FuncRegister (){
    var URL = "http://dionisio-env.yenwtnrkxn.us-east-1.elasticbeanstalk.com/registerAccount";
    
    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let role_account = "User";
    let jsonValue = { name_ACCOUNT: name, last_NAME: lastname,  email: email, role_ACCOUNT: role_account};

    axios.post(URL, jsonValue).then(res => {
        if(res){
            alert("Usuario registrado.");
        }else{
            alert("Se produjo un error.");
        }
    })
}

export default Register;
