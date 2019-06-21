import React from 'react';
import { Route } from 'react-router-dom';
import AdoptionPage from './Components/AdoptionPage';
import HomePage from './Components/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage} />
      <Route path='/adoptions' component={AdoptionPage} />
    </div>
  );
}

export default App;
