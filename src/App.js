import React, {Component} from 'react'
import movieData from './movieData';
import AllMovies from './components/AllMovies';
import Header from './components/Header';
import './App.css';


class App extends Component{
  constructor(){
    super()
    this.state = {
      movies: movieData.movies
    }
  }


  render(){
    return (
      <main>
        <Header />
        <AllMovies movies={this.state.movies}/> 
      </main>
    )
  }
  
}

export default App;
