import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Components/Home';
import NewFile from './Components/NewFile';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const router = (
  <Router>
    <div>
      <Route path="/home" component={Home} />
      <Route path="/newfile" component={NewFile} />
    </div>
  </Router>
)

ReactDOM.render(router, document.getElementById('root'));
