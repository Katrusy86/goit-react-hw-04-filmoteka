import React, {Component} from "react";
import {fetchCastMovies} from '../../services/fetcher'
import styles from './cast.module.css'


class Cast extends Component {
    state = { 
        cast:[],
    }

    componentDidMount(){
        fetchCastMovies(this.props.match.params.moviesId)
        .then((cast)=>this.setState({cast:[...cast.cast]}))
    }

    render() {
        const {cast} =this.state
        return (
            <ul>
                {cast.map((item)=>
                <li className={styles.castItem} key={item.id}>
                    <img src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`} alt="" />
                    <h3>{item.name}</h3>
                    <p>{item.character}</p>
                </li>)}
            </ul>
        );
    }
}

export default Cast;
