import React from 'react'
import '../OneMovie.css'
import { NavLink } from 'react-router-dom'

const OneMovie = ({ oneMovie }) => {
    let rating;
    if (oneMovie.average_rating > 5) {
        rating = <p>🍅 {Math.round(oneMovie.average_rating * 100) / 100}</p>;
    } else {
        rating = <p>🤮 {Math.round(oneMovie.average_rating * 100) / 100}</p>
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
                        {oneMovie.budget ? <p>Budget: ${oneMovie.budget}</p> : "" }
                        {oneMovie.revenue ? <p>Revenue: ${oneMovie.revenue}</p> : ""}
                        <div className='genres'>
                            {oneMovie.genres.map(genre => {
                                return <p key={genre}> {genre}</p>
                            })}
                        </div>
                        {rating}

                    </section>
                </div>
            </section>
        </div> : <h1>Loading Movie details....</h1>

    return display
}

export default OneMovie

