import React, { Component } from 'react';
import AllMovies from './components/AllMovies';
import Header from './components/Header';
import OneMovie from './components/OneMovie';
import './App.css';
import { fetchData } from './apiCalls';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      errorMsg: '',
      movies: '',
      oneMovie: '',
    }
  }

  componentDidMount = () => {
    this.setState({ isLoading: true })
    fetchData()
      .then(data => {
        return this.setState({
          ...this.state,
          movies: data.movies,
          isLoading: false,
          oneMovie: ''
        })
      })
      .catch(error => this.setState({
        ...this.state,
        errorMsg: error.message,
      }))
  }

  fetchOneMovie = (id = "") => {
    this.setState({ ...this.state, isLoading: true, oneMovie: ''})
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

  render() {
    if (this.state.errorMsg) {
      return (
        <main>
          <Header />
          <h1> {this.state.errorMsg} </h1>
        </main>
      )
    } else {

      return (
        <main>
          <Header />
          <Route exact path="/" render={() => <AllMovies movies={this.state.movies} fetchOneMovie={this.fetchOneMovie} />} />
          <Route exact path="/:id" render={({ match }) => {
            const findMovie = this.state.movies.find(movie => movie.id === parseInt(match.params.id));
            return <OneMovie oneMovie={this.state.oneMovie}  exit={this.exit} />
          }} />
        </main>
      )
    }
  }
}

export default App;
