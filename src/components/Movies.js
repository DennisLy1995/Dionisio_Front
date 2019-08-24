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
                <div className="col-md-3">
                    <div className="card mt-3">
                        <div className="card-header">
                            <h3>{movie.title}</h3>
                        </div>
                        <div className="card-body">
                            <img className="card-img-top" src={movie.image}/>
                            <span className="badge badge-pill badge-danger ml-2">{movie.clasification}</span>
                            <p>{movie.sinopsis}</p>
                        </div>
                    </div>
                </div>
            )
        })
        return  (
          <div className="App">
            <div className="container" style={{marginTop:'3%'}}>
              <h1 className="text-center text-white bg-dark" style={{borderRadius: '20px', opacity:'0.9'}}>Cartelera</h1>
              <div className="row mt-3">
                {listMovies}
              </div>
            </div>
          </div>);
    }
}

export default Movies;
