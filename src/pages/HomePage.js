import React, { Component } from 'react'
import {fetchMovies} from '../services/fetcher'
import MovieList from '../components/movielist/MovieList'


class HomePage extends Component {
    state = {
        items:[]
    }

    componentDidMount(){
        fetchMovies().then(items=>this.setState({items:items.results}))
    }

    render() {
        
        const {items} = this.state
        return (
            <div>
            <h1>Trending today</h1>
                <MovieList items={items} />

            </div>
        )        
    }
}

export default HomePage;