import React from 'react'
import {Link} from 'react-router-dom'
import styles from './movieList.module.css'

const MovieList = ({items,from}) => (
    <ul type="circle" className={styles.movie_list}>
        {items.map(item=>(
            <li key={item.id}>
                <Link to={{
                    pathname:`/movies/${item.id}`,
                    state:{from} 
                }}>
                {item.original_title || item.title}
                </Link>                
            </li>
        ))}
    </ul>
);

export default MovieList;