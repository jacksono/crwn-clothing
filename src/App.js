import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component'

import './App.css';

const Hats = () => (
  <h1> Them hats</h1>
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
