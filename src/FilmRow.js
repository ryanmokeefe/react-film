import React, { Component } from 'react';
import FilmPoster from './FilmPoster.js'

class FilmRow extends Component {
    render() {
        let year = (new Date(this.props.film.release_date)).getFullYear()

        return (
            <div className="film-row">
                
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
