import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Root from './Root.js'
import cv from './cv'

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path='/' component={Root} />
        <Route path='/resume/' component={Root} />
    </Router>
), document.getElementById("root"));

if (cv.highlights && cv.highlights.length) {
    for (var i = 0; i < cv.highlights.length; i++) {
        document.body.innerHTML =
            document.body.innerHTML.replace(
                new RegExp(cv.highlights[i], "g"),
                "<span style='" +
                "font-weight: bold; " +
                "display: inline-block; " +
                "background-color: rgb(245,255,235); " +
                "padding: 2px; " +
                "margin: -2px; " +
                "-webkit-print-color-adjust: exact;" +
                "'>" + cv.highlights[i] + "</span>")
    }
}