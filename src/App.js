import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetails.js';
import FilmListing from './FilmListing.js'
import filmData from './TMDB.js'

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmListing films={filmData}/>

        <FilmDetails films={filmData}/>
      
      </div>
    );
  }
}

export default App;
