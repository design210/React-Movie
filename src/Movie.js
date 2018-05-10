import React, { Component } from 'react';
import './Movie.css';
import propTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';

class Movie extends Component {
  render() {
    return (
        <div className="Movie"> 
            <div className="Movie__Column">
            <MoviePoster poster={this.props.poster} alt={this.props.title}/>
            </div>
            <div className="Movie__Column">            
                <h1>{this.props.title}</h1>
                <div className="Movie__Genres">
                    {this.props.genres.map((genres, index) => <MovieGenres genres={genres} key={index}/>)}
                </div>
                <p className="Movie__Synopsis">
                <LinesEllipsis
                    text = {this.props.synopsis}
                    maxLine='3'
                    ellipsis="..."
                    trimRight
                    basedOn="letters"
                />
                </p>
            </div>
        </div>
    );
  }
}

class MoviePoster extends Component {
    render() {
      return (
        <img src={this.props.poster} alt={this.props.alt} title={this.props.alt} className="Movie__Poster"/>
      );
    }
  }

  class MovieGenres extends Component {
    render() {
      return (
        <span className="Movie__Genre">{this.props.genres}</span>
      );
    }
  }


  Movie.propTypes = {
    title: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.array.isRequired,
    synopsis: propTypes.string.isRequired
  }
  MoviePoster.propTypes = {
    poster: propTypes.string.isRequired,
    alt: propTypes.string.isRequired
  }
  MovieGenres.propTypes = {
    genres: propTypes.string.isRequired
  }

export default Movie;
