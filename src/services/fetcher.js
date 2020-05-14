import axios from 'axios'

axios.defaults.baseURL = "https://api.themoviedb.org/3"


export const fetchMovies = async () => {
    return await axios.get(`/movie/popular?api_key=${process.env.REACT_APP_UNIQUE_KEY}`).then(results=>results.data) 
}

export const fetchSearchMovie = async (query) => {
    return await axios.get(`/search/movie?api_key=${process.env.REACT_APP_UNIQUE_KEY}&language=en-US&query=${query}&page=1&per_page=20&include_adult=false`).then(results=>results.data) 
}

export const fetchDetailsMovies = async (movie_id) => {
    return await axios.get(`/movie/${movie_id}?api_key=${process.env.REACT_APP_UNIQUE_KEY}&language=en-US`).then(results=>results.data) 
}

export const fetchCastMovies = async (movie_id) => {
    return await axios.get(`/movie/${movie_id}/credits?api_key=${process.env.REACT_APP_UNIQUE_KEY}&language=en-US`).then(cast=>cast.data) 
}

export const fetchReviewsMovies = async (movie_id) => {
    return await axios.get(`/movie/${movie_id}/reviews?api_key=${process.env.REACT_APP_UNIQUE_KEY}&language=en-US`).then(results=>results.data) 
}