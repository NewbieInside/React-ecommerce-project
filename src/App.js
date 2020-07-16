import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from './pages/HomePage/Homepage';
import HatsPage from './pages/HatsPage/HatsPage';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
};

export default App;
