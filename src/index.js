import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, BrowserRouter } from 'react-router-dom';


ReactDOM.render(
<BrowserRouter>
    <Route component = {App}/> 
</BrowserRouter>, document.getElementById('root'))