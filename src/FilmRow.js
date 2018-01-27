import React, { Component } from 'react';

class FilmRow extends Component {
    render() {

        return (
            <div>
                <h1>{this.props.film.title}</h1>
                <h4>{this.props.film.overview}</h4>

            </div>
        )
    }
}

export default FilmRow
