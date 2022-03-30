import React, { Component } from 'react';
// import movieData from './movieData';
import AllMovies from './components/AllMovies';
import Header from './components/Header';
import OneMovie from './components/OneMovie';
import './App.css';
import { fetchData } from './apiCalls';
import { Route, NavLink } from 'react-router-dom';

class App extends Component{
  constructor(){
    super()
    this.state = {
      isLoading: false,
      errorMsg: '',
      movies: '',
      // oneMovie: '',
    }
  }

 componentDidMount = () => {
   this.setState({isLoading: true})
   fetchData()
      .then(data => {
        return this.setState({
        ...this.state,
        movies: data.movies,
        isLoading: false
      })
    })
      .catch(error => this.setState({
        ...this.state,
        errorMsg: error.message,
      }))
 }

 fetchOneMovie = (id="") => {
   this.setState({...this.state, isLoading: true})
   fetchData(id)
      .then(data => this.setState({
         ...this.state,
         oneMovie: data.movie,
         isLoading: false
       }))
       .catch(error => this.setState({
         ...this.state,
         errorMsg: error.message,
       }))
 }

 // displayOneMovie = (e) => {
 //  const oneMovie = this.state.movies.find(movie => movie.poster_path === e.target.src)
 //  this.fetchOneMovie(oneMovie.id)
 // }

 exit = () => {
    this.setState({...this.state, oneMovie: '' })
 }

 render() {
   if (this.state.errorMsg){
     return (
       <main>
       <Header />
       <h1> {this.state.errorMsg} </h1>
       </main>
     )
   } else {
     // {!this.state.oneMovie && <AllMovies movies={this.state.movies} displayOneMovie={this.displayOneMovie}/>}
     // {this.state.oneMovie && <OneMovie oneMovie={this.state.oneMovie} exit={this.exit}/>}
     // <OneMovie oneMovie={this.state.oneMovie} exit={this.exit}/>} />
     console.log(this.state)
     return (
       <main>
         <Header />
         <Route path="/" render={() => <AllMovies movies={this.state.movies} displayOneMovie={this.displayOneMovie}/>} />
         <Route exact path="/movies/:id" render={({ match }) => {
           const oneMovie = this.state.movies.find(movie => movie.id === parseInt(match.params.id));
           return <OneMovie oneMovie={oneMovie} exit={this.exit} />
         }} />
       </main>
     )
   }

 }

}

export default App;
