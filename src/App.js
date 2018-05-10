import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';



class App extends Component {
  //Render: componentWillMount() -> render() -> componentDidMount()
  //Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {}

  componentDidMount(){
    this._getMovies(); 
  }

  _getMovies = async () => { 
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(heesung => heesung.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  _renderMovie = () => {  
    const movies = this.state.movies.map((movie) => {
      return <Movie 
        title={movie.title_english}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
      />
    })
    return movies
  }

  render() {
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovie() : <img src='http://cfile26.uf.tistory.com/image/233F6D505786DA870A1ADB' alt="Loading" width="50px"/>} 
      </div>
    );
  }
}

export default App;

