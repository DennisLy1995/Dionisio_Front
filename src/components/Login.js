import React, {Component} from 'react';
import './../App.css';
import {Redirect} from 'react-router-dom'

class Login extends Component{
    constructor(){
        super();
        this.state={
            username:"",
            password:"",
            redirectRegister:false
        };
        this.handleInputChange  = this.handleInputChange.bind(this);
        this.handleLogin        = this.handleLogin.bind(this);
        this.handleRegister     = this.handleRegister.bind(this);
    };

    handleLogin(e) {
        e.preventDefault();
        /*this.props.onAddTodo(this.state);*/
        if(this.state.username !== "" && 
           this.state.password !== ""){
            this.state.redirectRegister=true;
            alert("Campos llenos.!");
        }else{
            alert("Olvidaste llenar algun campo.!");
        }
        this.setState({
            username: '',
            password: '',
        });
    }

    handleRegister(e) {
        e.preventDefault();
        /*this.props.onAddTodo(this.state);*/
        alert("Debo renderizar el login")
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
        if(this.state.redirectRegister){
            return <Redirect to={"/movies/:".concat(this.state.username)}/>
        }else
            return  (
                <div className="App">
                    
                    <div className="container">
                        
                        <div className="col align-items-center">
                            <div className="card">
                                <form className="card-body">
                                    <div className="form-group">
                                        <input
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
                                            type="submit" 
                                            className="btn btn-info btn-block"
                                            onClick={this.handleLogin}>
                                            Login
                                        </button>
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
                </div>);
    }
}

export default Login;