import React, {Component} from 'react';
import FilmRow from './FilmRow.js'

class FilmListing extends Component {
    render() {
        let allFilms = this.props.films.map((film, index) => {
            return(
            <FilmRow  film={film} key={index} />
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
