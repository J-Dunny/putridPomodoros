import React, { Component } from 'react';
import AllMovies from './components/AllMovies';
import Header from './components/Header';
import OneMovie from './components/OneMovie';
import './App.css';
import { fetchData } from './apiCalls';
import { Route } from 'react-router-dom';
import OneMoHeader from './components/OneMoHeader';

class App extends Component {
  constructor() {
    super()
    this.state = {
      errorMsg: '',
      movies: [],
      oneMovie: {},
      isLoading: false
    }
  }

  componentDidMount = () => {
    this.setState({...this.state, isLoading: true});
    fetchData()
      .then(data => {
        return this.setState({
          ...this.state,
          movies: data.movies,
          oneMovie: {},
          isLoading: false
        })
      })
      .catch(error => this.setState({
        ...this.state,
        errorMsg: error.message,
      }))
  }

  fetchOneMovie = (id = "") => {
    this.setState({ ...this.state, oneMovie: {}});
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

  searchMovies = (searchInput) => {
    this.setState({...this.state, isLoading: true});
    fetchData()
      .then(data => {
        return this.setState({
          ...this.state,
          movies: data.movies.filter(movie => {
            let input = movie.title.toLowerCase()
            if (input.includes(searchInput)) {
              return movie
            }
          }),
          oneMovie: {},
          isLoading: false
        })
      })
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
          <Route exact path="/" render={() => <Header searchMovies={this.searchMovies}/>} />
          <Route exact path="/" render={() => <AllMovies movies={this.state.movies} fetchOneMovie={this.fetchOneMovie} isLoading={this.state.isLoading}/>} />
          <Route exact path="/:id" render={() => <OneMoHeader/>} />
          <Route exact path="/:id" render={() => <OneMovie isLoading={this.state.isLoading} oneMovie= {this.state.oneMovie}/>} />
        </main>
      )
    }
  }
}

export default App;


{/* <Route
          exact path="/puppies/:id"
          render={({ match }) => {
            const creatureToRender = puppies.find(creature => creature.id === parseInt(match.params.id));
            return <CreatureDetails {...creatureToRender} />
          }}
        /> */}