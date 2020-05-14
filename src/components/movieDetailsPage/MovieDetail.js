import React from "react";
import styles from "./movieDetailsPage.module.css";

const MovieDetail = ({ movie, movie: { genres = [] } }) => (
  <div className={styles.card_line}>
    <img className={styles.cardItem__image}
      src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
      alt=""
    />
    <div className={styles.cardItem__wrapper}>
      <h2 className={styles.cardItem__name}>{movie.original_title}</h2>

    <p>
      User Score
      <span className={styles.cardItem__vote_average}>
        {movie.vote_average}
      </span>
    </p>
    <p className={styles.cardItem_text}>Overview</p>
    <span className={styles.cardItem__description}>{movie.overview}</span>
    <p className={styles.cardItem_text}>Genre</p>
    <p className={styles.cardItem__genreList}>
      {genres.map((genre) => (
        <span className={styles.cardItem__genre} key={genre.name}>
          {" "}
          {genre.name}{" "}
        </span>
      ))}
    </p>
  </div>
  </div>
);

export default MovieDetail;
