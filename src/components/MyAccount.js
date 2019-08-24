import React, { Component } from 'react';
import './../App.css';
import axios from 'axios';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            usuario: "",
            email: "",
            role: "",
        };
    }

    render() {
        return (
            <div>
                <div id="MyAccountCard" className="card text-white mb-3" style={{ "maxWidth": "50rem", "marginLeft": "20%" }}>
                    <div id="myAccountHeader" className="card-header" style={{ "backgroundColor": "#343a40" }}> <h2>Account information</h2> </div>
                    <div className="card-body" style={{ "backgroundColor": "#454d54" }}>
                        <ul>
                            <li><h3>Id usuario: {sessionStorage.getItem("id")}</h3></li>
                            <li><h3>Nombre de usuario: {sessionStorage.getItem("usuario")}</h3></li>
                            <li><h3>Correo electronico: {sessionStorage.getItem("email")}</h3></li>
                            <li><h3>Role: {sessionStorage.getItem("role")}</h3></li>
                        </ul>
                        <button type="button" className="btn btn-danger" style={{ "marginLeft": "25px", "color": "white" }} onClick={this.clearSessionStorage}>Salir</button>
                    </div>
                </div>



            </div>
        );
    }

     clearSessionStorage() {
        sessionStorage.setItem("id", "");
        sessionStorage.setItem("usuario", "");
        sessionStorage.setItem("email", "");
        sessionStorage.setItem("role", "");
        alert("El usuario ha terminado la session.");
        window.location.reload();
    }

}







export default Login;
