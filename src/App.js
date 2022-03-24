import React, {Component} from 'react'
import movieData from './movieData';
import Movie from './components/Movie';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      movies: movieData.movies
    }
  }

  allMovies = () => {
    const movieCards = this.state.movies.map(movie => {
      return <Movie  
              key={movie.id} 
              title={movie.title}
              poster_path={movie.poster_path}
              backdrop_path={movie.backdrop_path}
              average_rating={movie.average_rating}
             />
    })
    return movieCards
  }


  render(){
    console.log(this.allMovies())
    return (
      <main>
        <div>{this.allMovies()}</div>
      </main>
    )
  }
  
}

export default App;
