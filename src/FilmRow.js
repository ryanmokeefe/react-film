import React, { Component } from 'react';
import FilmPoster from './FilmPoster.js'

class FilmRow extends Component {
    render() {
        let year = (new Date(this.props.film.release_date)).getFullYear()

        return (
            // add onDetailsClick onto each div when clicked:
            <div className="film-row" onClick={this.props.onDetailsClick}>
                
                <FilmPoster film={this.props.film}/>

                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{year}</p>
                </div>
            </div>
        )
    }
}

export default FilmRow
