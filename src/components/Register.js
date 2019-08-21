import React, {Component} from 'react';
import './../App.css';

class Register extends Component{
    constructor(){
        super();
        this.state={
            name:"",
            username:"",
            email:"",
            password:"",
            password_confirmation:""
        };

        this.handleInputChange  = this.handleInputChange.bind(this);
        this.handleLogin        = this.handleLogin.bind(this);
        this.handleRegister     = this.handleRegister.bind(this);
    };

    handleRegister(e) {
        e.preventDefault();
        /*this.props.onAddTodo(this.state);*/
        if(this.state.password !=="" && this.state.password_confirmation!=="" &&
           this.state.email!=="" && this.state.username!=="" && this.state.name!==""){
            if(this.state.password === this.state.password_confirmation){
                alert("Todos los campos fueron ingresados con exito.!");
            }else{
                alert("Las contraseñas no son iguales.!");
            }
        }else{
            alert("Quedaron campos vacios.!");
        }
        this.setState({
            name:"",
            username:"",
            email:"",
            password:"",
            password_confirmation:""
        });
    }

    handleLogin(e) {
        e.preventDefault();
        /*this.props.onAddTodo(this.state);*/
        alert("Debo renderizar el login");
        this.setState({
            name:"",
            username:"",
            email:"",
            password:"",
            password_confirmation:""
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
                <div className="container">
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
                                                        name="username"
                                                        className="form-control"
                                                        value={this.state.username}
                                                        onChange={this.handleInputChange}
                                                        placeholder="Username"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
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
                                                        type="password"
                                                        name="password"
                                                        className="form-control"
                                                        value={this.state.password}
                                                        onChange={this.handleInputChange}
                                                        placeholder="Password"
                                                    />
                                                </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                <input
                                                        type="password"
                                                        name="password_confirmation"
                                                        className="form-control"
                                                        value={this.state.password_confirmation}
                                                        onChange={this.handleInputChange}
                                                        placeholder="Password_Confirmation"
                                                    />
                                                </div>
                                            </div>
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
                    </div>
                </div>
            </div>
            );
    }
}

export default Register;