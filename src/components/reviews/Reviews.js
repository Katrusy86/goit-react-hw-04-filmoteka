import React, {Component} from 'react'
import {fetchReviewsMovies} from '../../services/fetcher'
import NotFound from '../errorMessage/NotFound'


class Reviews extends Component {
    state = { 
        results:[],
    }

    componentDidMount(){
        fetchReviewsMovies(this.props.match.params.moviesId)
        .then((results)=>this.setState({results:[...results.results]}))
        .catch((error) => this.setState({error}))
    }


    render() {
        const {results} = this.state
        return (
        <>
            {results.length === 0 && <NotFound/>}
            <ul>
                {results.map((res) => 
                <li key={res.id}>
                    <h3>{res.author}</h3>
                        <p>{res.content}</p>
                </li>)}
            </ul>
        </>
        );
    }
}

export default Reviews;