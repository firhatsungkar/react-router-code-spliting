import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import loadable from '@loadable/component'

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

const Home = loadable(() => import("./views/Home"))
const About = loadable(() => import("./views/About"))
const Users = loadable(() => import("./views/Users"))
const Topics = loadable(() => import("./views/Topics"))


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
            <Route path="/about" component={About}/>
            <Route path="/users" component={Users}/>
            <Route path="/topics" component={Topics}/>
            <Route path="/" exact component={Home}/>
            <RedirectWithStatus status={301} from="/profile" to="/users"/>
            <Route component={NotFound}/>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
