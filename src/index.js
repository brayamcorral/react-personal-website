import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Contact from './scenes/Contact/Contact.jsx';
import Home from './scenes/Home/Home.jsx';
import Projects from './scenes/Projects/Projects.jsx';
import Error from './scenes/Error/Error.jsx';
import Navbar from './components/Navbar/Navbar.jsx'

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/Contact'>
          <Contact />
        </Route>
        <Route path='/Projects'>
          <Projects />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


