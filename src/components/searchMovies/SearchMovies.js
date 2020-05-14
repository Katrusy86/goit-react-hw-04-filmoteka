import React from 'react'
import styles from '../searchMovies/searchMovie.module.css'

const SearchMovies = ({onSubmit,onChange,query}) => (
    <div>
        <form onSubmit={onSubmit}>
            <input className={styles.searchMovie} type="text" value={query} onChange={onChange}/>
            <button className={styles.search_button} type="submit">Search</button>
        </form>
    </div>
);

export default SearchMovies;