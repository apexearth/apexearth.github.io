import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Root from './Root.js'

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path='/' component={Root} />
        <Route path='/resume/' component={Root} />
    </Router>
), document.getElementById("root"));
