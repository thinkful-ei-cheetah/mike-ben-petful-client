import React from 'react';
import { Route } from 'react-router-dom';
import AdoptionPage from './Routes/AdoptionPage/AdoptionPage';
import HomePage from './Routes/HomePage/HomePage';
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
// ugh