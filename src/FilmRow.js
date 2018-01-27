import React, { Component } from 'react';

class FilmRow extends Component {
    render() {
        let year = (new Date(this.props.film.release_date)).getFullYear()

        return (
            <div>
                <img src={"https://image.tmdb.org/t/p/w780" + this.props.film.poster_path} alt="poster" />
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{year}</p>
                </div>
            </div>
        )
    }
}

export default FilmRow
