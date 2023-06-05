 
import './App.css';
 
import React,{ useEffect, useState } from 'react';
 
import { Recipes } from './components/Recipes/Recipes';
import { Search } from './components/Search/Search';
import { Routes, Route } from 'react-router-dom';
import { red } from '@mui/material/colors';
function App() {

 
   
  const YOUR_APP_ID = `c1e82fe7`;
  const YOUR_APP_KEY = "02a57a9699c30154207dcdae0893170b";
  
 
  return (


    <div className="App">
     
       <header className='mainHeader'>
          <a  >HolostiakCooking</a>
          <a  href = '/search-by-ing'>Поиск по ингридиентам < span style = {{color: red}}>(Тут не работает)</span></a>
         
          <a  href = '/'>Все рецепты</a>
       
 
       </header>
      
       <div className='content'>
        <Routes> 
          <Route path='/' element={<>  
         
        <Recipes/></>} />
        <Route path='/search-by-ing' element={<>  <Search/>
        <Recipes/></>} />
       
        </Routes>
       </div>
       
    </div>
  );
}

export default App;
