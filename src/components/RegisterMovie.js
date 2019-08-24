import React, {Component} from 'react';
import './../App.css';
import axios from 'axios';

class Register extends Component{
    constructor(){
        super();
        this.state={
            name:"",
            director:"",
            studio:"",
            posterURL:""
        };

        this.handleInputChange  = this.handleInputChange.bind(this);
        this.handleRegister     = this.handleRegister.bind(this);
    };

    handleRegister(e) {
        e.preventDefault();
        /*this.props.onAddTodo(this.state);*/
        if(this.state.name!=="" && 
        this.state.director!=="" && 
        this.state.studio!=="" &&
        this.state.posterURL!==""){
            alert("Sos un genio. Creaste una pelicula..!!");
        }else{
            alert("Quedaron campos vacios.!");
        }
        this.setState({
            name:"",
            director:"",
            studio:"",
            posterURL:""
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
                                                        id="director"
                                                        name="director"
                                                        className="form-control"
                                                        value={this.state.director}
                                                        onChange={this.handleInputChange}
                                                        placeholder="Director"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                id="studio"
                                                name="studio"
                                                className="form-control"
                                                value={this.state.studio}
                                                onChange={this.handleInputChange}
                                                placeholder="Studio"
                                            />
                                        </div>                                        
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                id="posterURL"
                                                name="posterURL"
                                                className="form-control"
                                                value={this.state.posterURL}
                                                onChange={this.handleInputChange}
                                                placeholder="PosterURL"
                                            />
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

function funcRegisterMovie(){
    var urlMov = "http://dionisio-env.yenwtnrkxn.us-east-1.elasticbeanstalk.com/registerMovie";
    var urlPos = "http://dionisio-env.yenwtnrkxn.us-east-1.elasticbeanstalk.com/registerMoviePoster";

    let name = document.getElementById("name").value;
    let director = document.getElementById("director").value;
    let studio = document.getElementById("studio").value;
    let posterUrl = document.getElementById("posterURL").value;

    let jsonMovieValue = {name: name, director: director, studio: studio}

    axios.post(urlMov, jsonMovieValue).then(res => {
        if(res){
            alert("Película registrada.");
        }else{
            alert("Se produjo un error.");
        }
    })
}

function funcGetMovie(name){
    let ROOT = "http://dionisio-env.yenwtnrkxn.us-east-1.elasticbeanstalk.com/";
    let URL = ROOT + "GetMovie/"+name;
    let movie = {};
    axios.get(URL).then(res => {

        movie = res.data;

      });
}

export default Register;
