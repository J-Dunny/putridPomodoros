import React from 'react'
import '../Movie.css'

const Movie = (props) => {
        return (
            <article className='movie-card'>
                <h3>{props.title}</h3>
                <img src={props.poster_path} />
                <h4>Rating: {Math.round(props.average_rating*100)/100}</h4>
            </article>
        )
    }


export default Movie
