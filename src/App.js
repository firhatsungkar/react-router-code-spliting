import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './views/Home'
import About from './views/About'
import Users from './views/Users'

// import logo from './logo.svg';
import './App.css';
import Topics from './views/Topics';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link className="App-link" to="/">Home</Link>
              </li>
              <li>
                <Link className="App-link" to="/about">About</Link>
              </li>
              <li>
                <Link className="App-link" to="/topics">Topics</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/topics">
              <Topics/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
