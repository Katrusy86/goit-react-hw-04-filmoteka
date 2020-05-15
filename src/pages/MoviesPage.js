import React, { Component } from 'react'
import {fetchSearchMovie} from '../services/fetcher'
import SearchMovies from '../components/searchMovies/SearchMovies';
import SearchMoviesList from '../components/searchMovies/SearchMoviesList';
import queryString from 'query-string'


class MoviesPage extends Component {
    state= {
        query:'',
        movies:[],
    }

    componentDidMount(){
        const parsed = queryString.parse(this.props.location.search).query
        console.log("parsed",parsed);
        this.props.location.search && 
        this.setState({query:parsed});  
        this.props.location.search && fetchSearchMovie(parsed).then((movies)=>this.setState({movies:movies.results}))
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.query){
        fetchSearchMovie(this.state.query).then((movies)=>this.setState({movies:movies.results}))
        this.props.history.push({pathname: this.props.location.pathname, search:`query=${this.state.query}`})
    }
}
    
    
    handleChange =(e)=>{
        this.setState({
            query:e.target.value
        })
    }
    
    
    render() {
        const{query, movies}=this.state
    return (
        <>
        <SearchMovies onSubmit={this.handleSubmit} onChange={this.handleChange} query={query} />
        <SearchMoviesList movies={movies} query={query} from={this.props.location.pathname}/>
        </>
    )
}
}

export default MoviesPage