import React, {Component} from 'react';

class FilmDetails extends Component {
    render() {
        return (
            <div className="film-details">
                <h1 className="section-title">DETAILS</h1>
            {/* pass in component for specific movie details */}
                <div className="detail-box">
                    <div className="detail-image">
                        <img src={"https://image.tmdb.org/t/p/w780" + this.props.film.backdrop_path} alt="poster"/>
                        <h1>{this.props.film.title}</h1>
                    </div>
                    <div className="detail-overview">{this.props.film.overview}</div>
                </div>
                

            </div>
        )
    }

}

export default FilmDetails
