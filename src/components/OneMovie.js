import React from 'react'
import '../OneMovie.css'

const OneMovie = ({oneMovie}) => {
    console.log(oneMovie)
    return (
        <div>
            <img src={oneMovie.poster_path} />
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
    )
}

export default OneMovie

// {id: 1, title: 'Fake Movie Title', poster_path: 'https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg', backdrop_path: 'https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg', release_date: '2019-12-04', …}
// average_rating: 6
// backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg"
// budget: 63000000
// genres: ['Drama']
// id: 1
// overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!"
// poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg"
// release_date: "2019-12-04"
// revenue: 100853753
// runtime: 139
// tagline: "It's a movie!"
// title: "Fake Movie Title"
