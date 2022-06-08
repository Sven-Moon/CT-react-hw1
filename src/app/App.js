import React from 'react';
import '../style/App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Dashboard from '../pages/Dashboard'
import RecipeView from '../pages/RecipeView';

function App() {
  return (
    <React.Fragment>
    <Navbar />
    <Routes>
      <Route children path='/' element={<Dashboard/>}/>
      <Route children path='/recipe-view' element={<RecipeView/>}/>
    </Routes>

    </React.Fragment>
  );
}

export default App;
