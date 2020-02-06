import React, { Component } from 'react';
import './App.css';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';

class App extends Component {
  
  state = {
    movies: [],
    selectedMovie: null
  }

  componentDidMount() {
    //fetch data
    fetch(' http://127.0.0.1:8000/api/movies/', {
      method: 'GET',
      headers: {
        'Authorization': 'Token 3aca90cebc8d83a834cc97937af58ccf141f4492'
      }
    }).then( resp => resp.json())
    .then( res => this.setState({movies: res}))
    .catch( error => console.log(error))
  }

  render () {
    return (
      <div className="App">
        <h1>Movie Rater</h1>
        <div className='layout'>
          <MovieList movies={this.state.movies}/>
          <MovieDetails movie={this.state.movie}/>
        </div>
      </div>
    );
  }
  
}

export default App;
