import React, { Component } from 'react'
import styles from './movieCard.module.css'

export class MovieCard extends Component {
  
  render() {
    const movie = this.props.movie;
    console.log(movie);
    return (
      <div className={styles.movieCard_wrapper}>
        <img src={movie.images[0].url} alt={movie.title}/>
        Hello this is a long name
      </div>
    )
  }
}
export default MovieCard
