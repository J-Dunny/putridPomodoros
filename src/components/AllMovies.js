import React from 'react'
import Movie from './Movie'
import '../AllMovies.css'

const AllMovies = ({movies, displayOneMovie}) => {
        const movieCards = movies.map(movie => {
          return <Movie  
                  id={movie.id}
                  key={movie.id} 
                  title={movie.title}
                  poster_path={movie.poster_path}
                  backdrop_path={movie.backdrop_path}
                  average_rating={movie.average_rating}
                  displayOneMovie={displayOneMovie}
                 />
        })
        return (
          <section className='all-movies'>{movieCards}</section>
        )
}

export default AllMovies

