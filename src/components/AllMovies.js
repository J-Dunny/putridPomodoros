import React from 'react'
import Movie from './Movie'
import '../AllMovies.css'

const AllMovies = ({movies, fetchOneMovie, isLoading}) => {
        if (isLoading) {
          return <section className='all-movies'><h1>Loading Movies...</h1></section>
        } else {
          let movieCards = movies.length ? movies.map(movie => {
            return (

                <Movie
                      id={movie.id}
                      key={movie.id}
                      title={movie.title}
                      poster_path={movie.poster_path}
                      backdrop_path={movie.backdrop_path}
                      average_rating={movie.average_rating}
                      fetchOneMovie ={fetchOneMovie}
                     />

          )}) : <h1>No Movies Available</h1>

          return (
            <section className='all-movies'>{movieCards}</section>
          )
        }
}

export default AllMovies
