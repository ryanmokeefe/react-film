import React, { Component } from 'react';

class FilmPoster extends Component {
    render() {
        return(
            <div className='poster'> 
                <img src={"https://image.tmdb.org/t/p/w780" + this.props.film.poster_path} alt="poster" /> 
            </div>
        )
    }

}

export default FilmPoster
