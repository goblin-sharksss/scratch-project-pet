import React, {useEffect, useState } from 'react';
import CreatePage from './CreatePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PetPage from './PetPage';

function App(){
    return(
        <Router>
            <Routes>
                <Route exact path='/' Component={CreatePage} />
                <Route exact path='/pets' Component={PetPage} />
                {/* <Route exact path='/login' Component={LoginPage} */}
            </Routes>
        </Router>
    )
}

export default App;
