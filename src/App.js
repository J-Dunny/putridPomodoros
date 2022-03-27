import React, {Component} from 'react'
import movieData from './movieData';
import AllMovies from './components/AllMovies';
import Header from './components/Header';
import OneMovie from './components/OneMovie';
import './App.css';


class App extends Component{
  constructor(){
    super()
    this.state = {
      movies: movieData.movies,
      oneMovie: ''
    }
  }

 displayOneMovie = (e) => {
   const oneMovie = this.state.movies.find(movie => movie.poster_path === e.target.src)
   this.setState({movies: movieData.movies, oneMovie: oneMovie })
 }

 exit = () => {
    this.setState({movies: movieData.movies, oneMovie: '' })
 }

  render(){
    
    return (
      <main>
        <Header />
        {!this.state.oneMovie && <AllMovies movies={this.state.movies} displayOneMovie={this.displayOneMovie}/>} 
        {this.state.oneMovie && <OneMovie oneMovie={this.state.oneMovie} exit={this.exit}/>}
      </main>
    )
  }
  
}

export default App;
