 
import './App.css';
 
import React,{ useEffect, useState } from 'react';
 
import { Recipes } from './components/Recipes/Recipes';
import { Search } from './components/Search/Search';
import { Routes, Route } from 'react-router-dom';
function App() {

 
   
  const YOUR_APP_ID = `c1e82fe7`;
  const YOUR_APP_KEY = "02a57a9699c30154207dcdae0893170b";
  
 
  return (


    <div className="App">
     
       <header className='mainHeader'>
          <a  >HolostiakCooking</a>
          <a  href = '/search-by-ing'>Поиск по ингридиентам</a>
         
          <a  href = '/all'>Все рецепты</a>
       
 
       </header>
      
       <div className='content'>
        <Routes> 
          <Route path='/all' element={<>  
         
        <Recipes/></>} />
        <Route path='/search-by-ing' element={<>  <Search/>
        <Recipes/></>} />
       
        </Routes>
       </div>
       
    </div>
  );
}

export default App;
