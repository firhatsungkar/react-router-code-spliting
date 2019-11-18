import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import Home from './views/Home'
import About from './views/About'
import Users from './views/Users'

// import logo from './logo.svg';
import './App.css';
import Topics from './views/Topics';

const RedirectWithStatus = ({ from, to, status}) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) staticContext.status = status
      return <Redirect from={from} to={to} />
    }}
  />
)

const Status = ({ code, children }) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) staticContext.status = code
      return children
    }}
  />
)

const NotFound = () => (
  <Status code={404}>
    <div>
      <h1>Sorry can't find that.</h1>
    </div>
  </Status>
)

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
              <li>
                <Link className="App-link" to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users/>
            </Route>
            <Route path="/topics">
              <Topics/>
            </Route>
            <RedirectWithStatus status={301} from="/profile" to="/users"/>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route component={NotFound}/>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
