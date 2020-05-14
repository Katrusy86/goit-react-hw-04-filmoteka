import React, { Component, lazy, Suspense } from "react";
import MovieDetail from "../movieDetailsPage/MovieDetail";
import { fetchDetailsMovies } from "../../services/fetcher";
import styles from '../movieDetailsPage/movieDetailsPage.module.css';
import { Route, NavLink, Switch } from "react-router-dom";
// import {useParams} from 'react-router-dom'
// const params = useParams(); // хуки(используются только для функционального компонента) не используются для классовом компоненте

const AsyncCast = lazy(()=>import("../cast/Cast" /*webpackChunkName:"cast-page" */))
const AsyncReviews = lazy(()=>import("../reviews/Reviews" /*webpackChunkName:"reviews-page" */))
 
const activeStyle = {
    color:'darkviolet',
    textDecoration: 'none',
    fontSize:'18px',
    
}

class MovieDetailsPage extends Component {
state = {
movie: {},
search: '',
from:''
};

componentDidMount() {
    fetchDetailsMovies(this.props.match.params.moviesId).then((movie) =>this.setState({ movie }),
    this.props.location.state && this.setState({search:this.props.location.state.search, 
        from:this.props.location.state.from})
);
}

handleGoBack = () => {
    this.state.search ? this.props.history.push({search:`query=${this.state.search}`,pathname:this.state.from}) : this.props.history.push("/")
}

render() {
    const { movie } = this.state;
console.log(movie);
return (
    <div>
      <button className={styles.cardButton} type="button" onClick={this.handleGoBack}>Go back</button>
    {movie && <MovieDetail movie={movie} />}
    <div className={styles.card_line}>
        <p>Additional information</p>
    <NavLink  activeStyle={activeStyle}
        to={{ pathname: `/movies/${this.props.match.params.moviesId}/cast` }}
    >
        Cast
    </NavLink>
    <NavLink className={styles.reviewsItem} activeStyle={activeStyle} 
        to={{
        pathname: `/movies/${this.props.match.params.moviesId}/reviews`,
        }}>
        Reviews
    </NavLink>
    </div>
    <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
            <Route exact path="/movies/:moviesId/cast" component={AsyncCast} />
            <Route path="/movies/:moviesId/reviews" component={AsyncReviews} />
        </Switch>
    </Suspense>    
    </div>
);
}
}

export default MovieDetailsPage;




