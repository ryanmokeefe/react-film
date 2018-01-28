import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetails.js';
import FilmListing from './FilmListing.js'
import TMDB from './TMDB.js'

// console.log(TMDB.films[0].title)
// console.log(TMDB.films[0])

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      films: TMDB,
      current: {}
    }
    // handleCurrent
    this.handleCurrent = this.handleCurrent.bind(this)
  }

  // from solution (adding component for filmDetails): 
  handleCurrent(film) {
    console.log(film)
    this.setState({
      current: film
    })
  }

  render() {
    return (
      <div className="film-library">
        <FilmListing films={TMDB.films} onDetailsClick={this.handleCurrent}/> 

        <FilmDetails film={this.state.current}/>
      
      </div>
    );
  }
}

export default App;
