import React, { Component } from 'react';
// import movieData from './movieData';
import AllMovies from './components/AllMovies';
import Header from './components/Header';
import OneMovie from './components/OneMovie';
import './App.css';
import { fetchData } from './apiCalls'


class App extends Component{
  constructor(){
    super()
    this.state = {
      isLoading: false,
      movies: '',
      oneMovie: '',
    }
  }

 componentDidMount = () => {
   this.setState({isLoading: true})
   fetchData()
   // fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies/")
   //    .then(response => response.json())
      .then(data => this.setState({
        movies: data.movies,
        isLoading: false
      }))
      .catch(error => console.log(error))
 }

 fetchOneMovie = (id="") => {
   this.setState({...this.state, isLoading: true})
   fetchData(id)
      .then(data => this.setState({
         ...this.state,
         oneMovie: data.movie,
         isLoading: false
       }))
       .catch(error => console.log(error))
   // fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
   //   .then(response => response.json())
   //   .then(data => this.setState({
   //     ...this.state,
   //     oneMovie: data.movie,
   //     isLoading: false
   //   }))
   //   .catch(error => console.log(error))

 }

 displayOneMovie = (e) => {
  const oneMovie = this.state.movies.find(movie => movie.poster_path === e.target.src)
  this.fetchOneMovie(oneMovie.id)
 }

 exit = () => {
    this.setState({...this.state, oneMovie: '' })
 }

  render() {
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
