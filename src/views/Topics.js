import React from 'react'
import {
  useRouteMatch,
  Link,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Topic from './Topic';

function Topics() {
  let match = useRouteMatch()

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <NavLink className="App-link" activeClassName="App-link--visited" to={`${match.url}/components`}>Components</NavLink>
        </li>
        <li>
          <NavLink className="App-link" activeClassName="App-link--visited" to={`${match.url}/props-v-state`}>Props v. State</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  )
}

export default Topics