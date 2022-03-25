import React, {Component} from 'react'
import movieData from './movieData';
import AllMovies from './components/AllMovies';
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
        <AllMovies movies={this.state.movies}/>
      </main>
    )
  }
  
}

export default App;
