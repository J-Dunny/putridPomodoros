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
      errorMsg: '',
      movies: [],
      oneMovie: '',
    }
  }

  componentDidMount = () => {
    fetchData()
      .then(data => {
        return this.setState({
          ...this.state,
          movies: data.movies,
          oneMovie: ''
        })
      })
      .catch(error => this.setState({
        ...this.state,
        errorMsg: error.message,
      }))
  }

  fetchOneMovie = (id = "") => {
    this.setState({ ...this.state, oneMovie: ''})
    fetchData(id)
      .then(data => this.setState({
        ...this.state,
        oneMovie: data.movie,
      }))
      .catch(error => this.setState({
        ...this.state,
        errorMsg: error.message,
      }))
      console.log(this.state.oneMovie)
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
          <Route exact path="/:id" render={() => {
            return <OneMovie oneMovie={this.state.oneMovie}/>
          }} />
        </main>
      )
    }
  }
}

export default App;
