import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import styles from '../searchMovies/searchMovie.module.css'

const SearchMoviesList = ({movies,query,from}) => (
    <ul type="circle" className={styles.searchMovie_list}>
        {movies.map((movie)=>
        <li key={movie.id}>
        <Link to={{
            pathname:`/movies/${movie.id}`,
            search:`?query=${query}`,
            state: {from, search:query}
            }}>
            {movie.original_title}
        </Link></li>)
    
        }
    </ul>
);

export default withRouter(SearchMoviesList);