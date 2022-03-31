import React from 'react'
import '../OneMovie.css'
import { NavLink } from 'react-router-dom'

const OneMovie = ({ oneMovie }) => {
    console.log(oneMovie)
    const display = oneMovie.id ?
    
        <div className='container' style={{ backgroundImage: `url(${oneMovie.backdrop_path})` }} >
            <NavLink to='/'><button className='exit-button'>❌</button></NavLink>
            <section>
                <div className='one-movie'>
                    <img className='one-movie-img' src={oneMovie.poster_path} />
                    <section className='one-movie-info'>
                        <p>Released: {oneMovie.release_date}</p>
                        <p>{oneMovie.overview}</p>
                        <p>{oneMovie.runtime} mins</p>
                        <p>Rating: {oneMovie.average_rating} </p>
                        <p>They spent ${oneMovie.budget} making this film!</p>
                        <p>But they made a total of ${oneMovie.revenue}</p>
                        <p>{oneMovie.genres}</p>
                    </section>
                </div>
            </section>
        </div> : <h1>Loading Movie details....</h1>
    
    return display
}

export default OneMovie

