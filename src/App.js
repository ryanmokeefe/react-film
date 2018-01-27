import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetails.js';
import FilmListing from './FilmListing.js'
import TMDB from './TMDB.js'

// console.log(TMDB.films[0].title)
// console.log(TMDB.films[0])

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmListing films={TMDB.films}/> 

        <FilmDetails films={TMDB.films}/>
      
      </div>
    );
  }
}

export default App;
