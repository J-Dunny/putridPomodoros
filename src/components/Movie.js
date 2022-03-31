import React from 'react'
import '../Movie.css'
import { NavLink } from 'react-router-dom'

const Movie = (props) => {
    let rating;
    if (props.average_rating > 5) {
        rating = <p className='rating'>🍅</p>;
    } else {
        rating = <p className='rating'>🤮</p>
    }
    return (
        <div>

<article onClick={() => props.fetchOneMovie(props.id)} className='movie-card' >
                <NavLink key={props.id} to={`/${props.id}`} style={{ textDecoration: 'none' }}>
                    <img src={props.poster_path}></img>
                </NavLink>
                <section className='title-rating'>
                    <h1>{props.title}</h1>
                    {rating}
                </section>
            </article>

            


        </div>
    )
}

export default Movie
// {Math.round(props.average_rating * 100) / 100}
//  <img src={props.poster_path} /> 

// <NavLink key={props.id} to={`/${props.id}`} style={{ textDecoration: 'none' }}>
            // <article style={{backgroundImage: `url(${props.poster_path})`}}onClick={() => props.fetchOneMovie(props.id)} className='movie-card' >
                
            //         <img src={props.poster_path}></img>
                
            //     <section className='title-rating'>
            //         <h1>{props.title}</h1>
            //         {rating}
            //     </section>
            // </article>
            // </NavLink> 