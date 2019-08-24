import React, { Component } from 'react';
import './../App.css';
import axios from 'axios'

import { listOfMovies } from './listOfMovies.json'
import { arrayExpression } from '@babel/types';
console.log(listOfMovies);

class Movies extends Component {
    constructor(props) {
        super(props);

        console.log("Holis");
        console.log("Holis jaja");
    }

    render() {
        const listMovies = this.getMoviesfunc().map((movie, i) => {
            return (
                <div className="col-md-3">
                    <div className="card mt-3">
                        <div className="card-header">
                            <h3>{movie.name}</h3>
                        </div>
                        <div className="card-body">
                            <img className="card-img-top" src={movie.path} />
                            <span className="badge badge-pill badge-danger ml-2">{movie.studio}</span>
                            <p>{movie.director}</p>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="App">
                <div className="container" style={{ marginTop: '3%' }}>
                    <h1 className="text-center text-white bg-dark" style={{ borderRadius: '20px', opacity: '0.9' }}>Cartelera</h1>
                    <div className="row mt-3">
                        {listMovies}
                    </div>
                </div>
            </div>);
    }

    getMoviesfunc() {
        var ROOT = "http://dionisio-env.yenwtnrkxn.us-east-1.elasticbeanstalk.com/";
        var urlMov = ROOT + "AllMovies";
        var urlPos = ROOT + "AllMoviePosters";
        let listOfMyMovies;
        let listPosters;
        const listOfMovies = {};
        axios.get(urlMov).then(resMov => {
            if (resMov.status == 200) {
                listOfMyMovies = resMov.data;
                console.log(listOfMyMovies);
            }
        });
    
        axios.get(urlPos).then(resPos => {
            if (resPos.status == 200) {
                listPosters = resPos.data;
                console.log(listPosters);
            }
        });
        setTimeout(() => {
            for (var i = 0; i < listOfMyMovies.length; i++) {
                for (var j = 0; j < listPosters.length; j++) {
                    listOfMyMovies.push({ nombre: listOfMyMovies[i].name, director: listOfMyMovies[i].director, studio: listOfMyMovies[i].studio, path: listPosters[i].url_POSTER })
                    
                }
            }
            console.log(listOfMyMovies)
            return listOfMyMovies;
        }, 5000);
    }
}


export default Movies;
