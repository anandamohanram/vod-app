import React, { Component } from "react";
import { MovieCarousel } from "../../components";
import styles from "./homePage.module.css";

export class HomePage extends Component {
  state = {
    entries: [],
    totalCount: 0,
    loading: true,
    playedList: []
  };

  componentDidMount() {
    this.fillStateFromLocalStorage();
  console.log(this.state);
    fetch("https://demo2697834.mockable.io/movies")
      .then(response => response.json())
      .then(movieData =>
        this.setState({
          entries: movieData.entries,
          totalCount: movieData.totalCount,
          loading: false
        })
      );

    document.addEventListener("keydown", e => {

      let carousel = document.getElementById("carousel1");

      
      if (document.querySelectorAll("div :focus").length === 0) {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft")
          carousel.firstElementChild.focus();
      }else{
        let focused_id = document.querySelector("div :focus").id;
        if(e.key === 'ArrowRight' && focused_id < this.state.totalCount-1){
          carousel.childNodes[parseInt(focused_id) + 1].focus();
        }
        if(e.key === 'ArrowLeft' && focused_id > 0){
          carousel.childNodes[parseInt(focused_id) - 1].focus();
        }
      }    
    });
  }

  handlePlayedMovie = playedMovie => {
    let playedMovieList = this.state.playedList;
    for (let i = 0; i < playedMovieList.length; i++) {
      if (playedMovieList[i].id === playedMovie.id) {
        playedMovieList.splice(i, 1);
        this.setState({ playedList: [playedMovie, ...playedMovieList] });
        if(localStorage)
        localStorage.setItem('playedList', JSON.stringify([playedMovie, ...playedMovieList]));
      }
    }

    this.setState({ playedList: [playedMovie, ...playedMovieList] });
    if(localStorage)
    localStorage.setItem('playedList', JSON.stringify([playedMovie, ...playedMovieList]));
  };


  
fillStateFromLocalStorage = () => {
  for (let key in this.state) {
    if (localStorage.hasOwnProperty(key)) {
      let value = localStorage.getItem(key);
      try {
        value = JSON.parse(value);
        this.setState({ [key]: value });
      } catch (e) {
        this.setState({ [key]: value });
      }
    }
  }
}

  render() {
    if (this.state.loading) {
      return (
        <h5>
          <center> Fetching Movie Data ... </center>
        </h5>
      );
    } else
      return (
        <div>
          <div className={styles.titles}>Movies</div>
          <MovieCarousel
            id="carousel1"
            movieList={this.state.entries}
            playedMovie={this.handlePlayedMovie}
          />

          <div className={styles.titles}>Previously watched</div>

          {this.state.playedList.length <= 0 && (
            <div className={`${styles.titles} ${styles.small}`}>
              Please play a movie from the list above.
            </div>
          )}
          <MovieCarousel
            id="carousel2"
            movieList={this.state.playedList}
            playedMovie={this.handlePlayedMovie}
            small={true}
          />
        </div>
      );
  }
}

export default HomePage;
