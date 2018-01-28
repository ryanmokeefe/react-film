import React, {Component} from 'react';
import FilmRow from './FilmRow.js'

class FilmListing extends Component {
    render() {
        let allFilms = this.props.films.map((film) => {
            return(
                // pass onDetailsClick onto the filmRow to be created with each film iteration:
            <FilmRow  onDetailsClick={() => this.props.onDetailsClick(film)} film={film} key={film.id} />
        )
            
        })

        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {/* <h1>{this.props.films[3].title}</h1> */}
                {allFilms}
            </div>
        )
    }

}

export default FilmListing
