import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Dashboard from './notes/dashboard.js';
import Home from './Home.js';

class App extends React.Component {
  render() {
    return(
      <div>
        <link
          href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
          rel='stylesheet'
        />
        <ul class="nav nav-pills">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/dashboard'>Dashboard</Link></li>
        </ul>
        <Route exact path='/' component={Home} />
        <Route path='/dashboard' component={Dashboard} />
      </div>
    )
  }
}

export default App;
