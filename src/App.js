import React, {lazy, Suspense} from 'react'
import {Route, Switch} from 'react-router-dom'
import Nav from './components/nav/Nav'


const AsyncHomePage = lazy(() => import('./pages/HomePage' /*webpackChunkName:"home-page"*/))
const AsyncMoviesPage = lazy(() => import('./pages/MoviesPage' /*webpackChunkName:"movies-page"*/))
const AsyncMovieDetailsPage = lazy(() => import('./components/movieDetailsPage/MovieDetailsPage' /*webpackChunkName:"moviesDetails-page"*/))


const App = () => (
    <div>
        <Nav/>
        <Suspense fallback = {<h1>Loading...</h1>}>
        <Switch>
            <Route exact path="/" component={AsyncHomePage} />
            <Route path = "/movies/:moviesId" component={AsyncMovieDetailsPage} />
            <Route path="/movies" component={AsyncMoviesPage} />
        </Switch>              
        </Suspense>
    </div>
)

export default App;