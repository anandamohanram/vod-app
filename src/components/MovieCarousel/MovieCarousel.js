import React, { Component } from "react";
import PropTypes from 'prop-types';
import { MovieCard } from "..";
import styles from "./movieCarousel.module.css";

//map the movie list to individual Movie Cards and present in a carousel
export class MovieCarousel extends Component {

  render() {
    return (
      <div id={this.props.id} className={styles.movieCarousel_wrapper}>
        {this.props.movieList.map((movieItem, index) => {
          return (
            <MovieCard
              tabIndex={index}
              movie={movieItem}
              key={movieItem.id}
              playedMovie={this.props.playedMovie}
              small={this.props.small}
            />
          );
        })}
      </div>
    );
  }
}

export default MovieCarousel;

//Typechecking with propTypes
MovieCarousel.propTypes = {
  id: PropTypes.string,
  playedMovie: PropTypes.func,
  movieList:PropTypes.array,
  small:PropTypes.bool
};