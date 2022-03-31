import React from 'react'
import '../OneMovie.css'
import { NavLink } from 'react-router-dom'

const OneMovie = ({ oneMovie }) => {
    let rating;
    if (oneMovie.average_rating > 5) {
        rating = <p>🍅</p>;
    } else {
        rating = <p>🤮</p>
    }

    const display = oneMovie.id ?

        <div className='container' style={{ backgroundImage: `url(${oneMovie.backdrop_path})` }} >
            <NavLink className='exit-button' to='/' style={{ textDecoration: 'none' }}><p className='exit-button'>❌</p></NavLink>
            <section>
                <div className='one-movie'>
                    <img className='one-movie-img' src={oneMovie.poster_path} />
                    <section className='one-movie-info'>
                        <p>Released: {oneMovie.release_date}</p>
                        <p>{oneMovie.overview}</p>
                        <p>{oneMovie.runtime} mins</p>
                        <p>They spent ${oneMovie.budget} making this film!</p>
                        <p>But they made a total of ${oneMovie.revenue}</p>
                        <div className='genres'>
                            {oneMovie.genres.map(genre => {
                                return <p key={genre}> {genre} </p>
                            })}
                        </div>
                        <p>{rating} </p>

                    </section>
                </div>
            </section>
        </div> : <h1>Loading Movie details....</h1>

    return display
}

export default OneMovie

