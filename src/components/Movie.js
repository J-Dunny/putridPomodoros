import React from 'react'
import '../Movie.css'
import { NavLink } from 'react-router-dom'

const Movie = (props) => {
    return (
        <article onClick={() => props.fetchOneMovie(props.id)} className='movie-card' >
            <NavLink key={props.id} to={`/${props.id}`}>
                <img src={props.poster_path} />
            </NavLink>
            <h4>Rating: {Math.round(props.average_rating * 100) / 100}</h4>
        </article>
    )
}

export default Movie
