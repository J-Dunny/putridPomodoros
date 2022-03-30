import React from 'react'
import '../Movie.css'

const Movie = (props) => {
        return (
            <article className='movie-card' >
                <img src={props.poster_path} />
                <h4>Rating: {Math.round(props.average_rating*100)/100}</h4>
            </article>
        )
    }

// onClick={(e) => props.displayOneMovie(e)}

export default Movie
