 
import './App.css';
 
import React,{ useEffect, useState } from 'react';
 
import { Recipes } from './components/Recipes/Recipes';
import { Search } from './components/Search/Search';
import { Routes, Route } from 'react-router-dom';
import { red } from '@mui/material/colors';
function App() {

 
   
  const YOUR_APP_ID = `c1e82fe7`;
  const YOUR_APP_KEY = "02a57a9699c30154207dcdae0893170b";
  const [addedIng, setAddedIng]=useState([]);
  const [ingredients, setIngredients] = useState([]);
     
  const addIng = (ing) =>{
 
    setAddedIng((addedIng) => [...addedIng, ing]);
    const updatedItems = ingredients.filter(ingredient => ingredient !== ing);
    setIngredients(updatedItems);
  }
  const deleteIng = (ing) =>{
    const updatedItems = addedIng.filter(addedIng => addedIng !== ing);
    setAddedIng(updatedItems);

    setIngredients((ingredients) => [...ingredients, ing]);
  }
 
  return (


    <div className="App">
     
       <header className='mainHeader'>
          <a  >HolostiakCooking</a>
          <a  href = '/'>Recipe search</a>
         
       </header>
      
       <div className='content'>
        <Routes> 
         
        <Route path='/' element={<>  
        <Search addIng ={addIng}
        addedIng ={addedIng}
        deleteIng ={deleteIng }
        ingredients={ingredients}
        setIngredients={setIngredients}
        />
         
         
        
        <Recipes addedIng = {addedIng} />
        
        </>} />
       
        </Routes>
       </div>
       
    </div>
  );
}

export default App;
