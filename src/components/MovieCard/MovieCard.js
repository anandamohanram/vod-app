import React, { Component } from "react";
import styles from "./movieCard.module.css";
import PropTypes from 'prop-types';

export class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.cardRef = React.createRef();
  }

  componentDidMount() {
    //hide video on start
    this.videoRef.current.style.display = "none";
  }


  //open video with ENTER key press
  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.openMovie();
    }
  };


  //show video element in full screen
  openMovie = () => {
    const videoPlayer = this.videoRef.current;
    videoPlayer.style.display = "block";
    videoPlayer.play();
    this.props.playedMovie(this.props.movie);
    if (videoPlayer.requestFullscreen) {
      videoPlayer.requestFullscreen();
    } else if (videoPlayer.mozRequestFullScreen) {
      videoPlayer.mozRequestFullScreen();
    } else if (videoPlayer.webkitRequestFullscreen) {
      videoPlayer.webkitRequestFullscreen();
    } else if (videoPlayer.msRequestFullscreen) {
      videoPlayer.msRequestFullscreen();
    }

    //listen for user exit from full screen
    document.addEventListener("webkitfullscreenchange", this.handleFullScreenOff);
    document.addEventListener("mozfullscreenchange", this.handleFullScreenOff);
    document.addEventListener("fullscreenchange", this.handleFullScreenOff);
  };

  //video finishes playing and exit full screen
  closeMovie = () => {
    const videoPlayer = this.videoRef.current;
    videoPlayer.pause();
    videoPlayer.style.display = "none";
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }

    //remove used full screen change listeners
    document.removeEventListener("webkitfullscreenchange", this.handleFullScreenOff);
    document.removeEventListener("mozfullscreenchange", this.handleFullScreenOff);
    document.removeEventListener("fullscreenchange", this.handleFullScreenOff);
  };

  //user close video or exit from full screen
  handleFullScreenOff = () => {
    const state =
      document.fullScreen ||
      document.mozFullScreen ||
      document.webkitIsFullScreen;

    if (!state) {
      const videoPlayer = this.videoRef.current;
      videoPlayer.pause();
      videoPlayer.style.display = "none";
      this.cardRef.current.focus();

      document.removeEventListener(
        "webkitfullscreenchange",
        this.handleFullScreenOff
      );
      document.removeEventListener(
        "mozfullscreenchange",
        this.handleFullScreenOff
      );
      document.removeEventListener(
        "fullscreenchange",
        this.handleFullScreenOff
      );
    }
  };

  componentWillUnmount() {
    // empty source and remove video from memory
    const videoPlayer = this.videoRef.current;
    videoPlayer.pause();
    videoPlayer.removeAttribute("src"); 
    videoPlayer.load();
  }

  render() {
    const movie = this.props.movie;
    return (
      <div
        tabIndex={this.props.tabIndex}
        id={this.props.tabIndex}
        ref={this.cardRef}
        className={
          this.props.small
            ? `${styles.movieCard_wrapper} ${styles.movieCard_wrapper_small}`
            : `${styles.movieCard_wrapper}`
        }
        onClick={this.openMovie}
        onKeyDown={this.handleKeyPress}
      >
        <img
          src={
            movie.images[0].url
              ? movie.images[0].url
              : process.env.PUBLIC_URL + "/imagenotfound.png"
          }
          alt={movie.title}
        />
        <video
          ref={this.videoRef}
          src={movie.contents[0].url}
          onEnded={this.closeMovie}
          preload="none"
          controls
        />
        <span className={styles.movieCard_title}>{movie.title}</span>
      </div>
    );
  }
}
export default MovieCard;

//Typechecking with propTypes
MovieCard.propTypes = {
  movie: PropTypes.object,
  playedMovie: PropTypes.func,
  tabIndex:PropTypes.number,
  small:PropTypes.bool
};