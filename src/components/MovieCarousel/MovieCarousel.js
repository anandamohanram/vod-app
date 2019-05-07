import React, { Component } from 'react'
import { MovieCard } from '..';

export class MovieCarousel extends Component {
  render() {
    return (
      <div>
        {this.props.movieList.entries.map((movieItem) => {    
        return <MovieCard movie = {movieItem} key={movieItem.id}/>
        })}
      </div>
    )
  }
}

export default MovieCarousel

