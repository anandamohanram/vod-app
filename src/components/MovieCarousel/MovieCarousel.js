import React, { Component } from "react";
import { MovieCard } from "..";
import styles from "./movieCarousel.module.css";

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
