import React, {Component} from 'react';
import './../App.css';

import {listOfMovies} from './listOfMovies.json'
console.log(listOfMovies);

class Movies extends Component{
    constructor(props){
        super(props);
        this.state = {
            listOfMovies
        }
    }

    render(){
        const listMovies = this.state.listOfMovies.map((movie,i)=>{
            return(
                <div className="col-md-4">
                    <div className="card mt-4">
                        <div className="card-header">
                            <h3>{movie.title}</h3>
                            <img src={movie.image}/>
                        </div>
                        <div className="card-body">
                            <span className="badge badge-pill badge-danger ml-2">{movie.clasification}</span>
                            <p>{movie.sinopsis}</p>
                        </div>
                    </div>
                </div>
            )
        })
        return  (
            <div className="App">
                <img src="https://icon-library.net/images/cinema-icon/cinema-icon-5.jpg" className="App-logo" alt="logo" />
                <div className="container">
                    <div className="row mt-4">
                        {listMovies}
                    </div>
                </div>
            </div>);
    }
}

export default Movies;