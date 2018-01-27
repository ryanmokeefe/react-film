import React, { Component } from 'react';

class FilmRow extends Component {
    render() {

        return (
            <div>
                <img src={"https://image.tmdb.org/t/p/w780" + this.props.film.poster_path} alt="poster" />
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.year}</p>
                </div>
            </div>
        )
    }
}

export default FilmRow
