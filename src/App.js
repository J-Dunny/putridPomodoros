import React, {Component} from 'react'
// import movieData from './movieData';
import AllMovies from './components/AllMovies';
import Header from './components/Header';
import OneMovie from './components/OneMovie';
import './App.css';


class App extends Component{
  constructor(){
    super()
    this.state = {
      savedData: '',
      isLoading: false,
      movies: '',
      oneMovie: '',
    }
  }

 componentDidMount = () => {
   this.setState({isLoading: true})
   fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => response.json())
      .then(data => this.setState({
        savedData: data.movies,
        movies: data.movies,
        isLoading: false
      }))
      .catch(error => console.log(error))
 }

 fetchOneMovie = id => {
   this.setState({...this.state, isLoading: true})
   fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
     .then(response => response.json())
     .then(data => this.setState({
       ...this.state,
       oneMovie: data.movie
     }))
     .catch(error => console.log(error))

 }

 displayOneMovie = (e) => {
  const oneMovie = this.state.movies.find(movie => movie.poster_path === e.target.src)
  this.fetchOneMovie(oneMovie.id)
  // this.setState({...this.state, oneMovie: oneMovie })
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
