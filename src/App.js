import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from './pages/HomePage/Homepage';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';



const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
