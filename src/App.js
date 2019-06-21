import React from 'react';
import { Route } from 'react-router-dom';
import AdoptionPage from './Components/AdoptionPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path='/adoptions' component={AdoptionPage} />
    </div>
  );
}

export default App;
