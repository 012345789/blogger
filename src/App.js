import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/header.js';
import ArticleSkeleton from './components/article/articleSkeleton.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Router>
          <div>
            <p>
              Here's a 
              <Link to = { `/article/123` }>
                link
              </Link>
            </p>
            <Route
              path = '/article/:articleId'
              render = {props => <ArticleSkeleton {...props} />}
            >
            </Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
