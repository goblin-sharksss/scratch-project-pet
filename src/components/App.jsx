import React from 'react';
import { useEffect, useState } from 'react';
import CreatePage from './CreatePage.jsx';
import { BrowserRouter as Router, Switch, Routes } from 'react-router-dom';
import PetPage from './PetPage.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' Component={CreatePage} />
        <Route exact path='/petpage' Component={PetPage} />
        {/* <Route exact path='/login' Component={LoginPage} */}
      </Switch>
    </Router>
  );
}

export default App;
