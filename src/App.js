import React, {Component} from 'react';
import './App.css';

import Login    from './components/Login.js'
import Register from './components/Register.js'
import Movies   from './components/Movies.js'

class App extends Component{
  constructor(props){
    super(props);
    console.log("Si entre al constructor jaja pero no se que pasa aca jaja");
    this.state = {
      username : "",
      contenido:1
    };
    this.handleRegister = this.handleRegister.bind(this); /*redirectComponent = 1*/
    this.handleLogOut   = this.handleLogOut.bind(this);   /*redirectComponent = 2*/
    this.handleMovies   = this.handleMovies.bind(this);   /*redirectComponent = 3*/
    this.handleHome     = this.handleHome.bind(this);     /*redirectComponent = 4*/
  };

  handleRegister(e){
    e.preventDefault();
    this.setState({
      contenido:1
    });
  };

  handleLogOut(e){
    e.preventDefault();
    this.setState({
      contenido:2
    });
  };

  handleMovies(e){
    e.preventDefault();
    this.setState({
      contenido:3
    });
  };

  handleHome(e){
    e.preventDefault();
    this.setState({
      contenido:4
    });
  };


  render(){
    return (
      <div className="App">
        <div className="row align-items-center">
          <div className="col">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="#">Dionisio</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <button type="button"  id="buttonHome" className="btn btn-link" onClick={this.handleHome} >Home<span className="sr-only">(current)</span></button>
                  </li>
                  <li className="nav-item">
                    <button type="button " id="buttonRegister" className="btn btn-link" onClick={this.handleRegister} >Register</button>
                  </li>
                  <li className="nav-item">
                    <button type="button" id="buttonMovies" className="btn btn-link" onClick={this.handleMovies} >Movies</button>
                  </li>
                  <li className="nav-item">
                    <button type="button"  id="buttonLogOut" className="btn btn-link" onClick={this.handleLogOut} >Logout</button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="container-fluid">
          <LayoutContendio contenido={this.state.contenido} />
        </div>
      </div>
    )
  }
}

function LayoutContendio(props) {

 switch(props.contenido) {

  case 1: return  <Register/>; break;/*Register*/
  case 2: return  <p></p>; break;/*Logout*/
  case 3: return  <Movies/>; break;/*Movies*/
  default: return <Login/>; break;/*Home*/

}

}
export default App;
