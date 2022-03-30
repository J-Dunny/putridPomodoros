import React from 'react'
import Movie from './Movie'
import '../AllMovies.css'
import { NavLink } from 'react-router-dom';

const AllMovies = ({movies, fetchOneMovie}) => {
        const movieCards = movies ? movies.map(movie => {
          return (
            <NavLink key={movie.id} to={`/${movie.id}`}>
              <Movie
                    id={movie.id}
                    key={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path}
                    backdrop_path={movie.backdrop_path}
                    average_rating={movie.average_rating}
                    fetchOneMovie ={fetchOneMovie}
                   />
            </NavLink>
        )}) : <h1>Loading Movies...</h1>

        return (
          <section className='all-movies'>{movieCards}</section>
        )
}

export default AllMovies
