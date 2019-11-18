import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import AsyncComponent from './components/AsyncComponent'

// import logo from './logo.svg';
import './App.css';

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

const AsyncHome = AsyncComponent(() => import("./views/Home"))
const AsyncAbout = AsyncComponent(() => import("./views/About"))
const AsyncUsers = AsyncComponent(() => import("./views/Users"))
const AsyncTopics = AsyncComponent(() => import("./views/Topics"))


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
            <Route path="/about" component={AsyncAbout}/>
            <Route path="/users" component={AsyncUsers}/>
            <Route path="/topics" component={AsyncTopics}/>
            <Route path="/" exact component={AsyncHome}/>
            <RedirectWithStatus status={301} from="/profile" to="/users"/>
            <Route component={NotFound}/>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
