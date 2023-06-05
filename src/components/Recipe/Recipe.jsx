import './Recipe.css'
import React from 'react'
import { v4 as uuidv4 } from "uuid";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
 

export const Recipe = ({recipe, getIngredientWordForm, setReceipeVisibility}) =>{
    return(
        <> 

<div className='backContainer' onClick = {()=>setReceipeVisibility(false)}>
     
      <div><ArrowBackIcon className='ArrowBackIcon'/></div>
      <div><span className = 'backSpan'> Назад</span> </div>
    </div>
        
         <div className='RecipeMain'  >
        <div > 
        <h2  key={uuidv4()} >
          {recipe["recipe"]["label"]}
        </h2>
        <img width={'200px'} src={recipe["recipe"]["image"]} />
        </div>
        <div className='recipeIngredients'>  
        
        <h4  className="recipeIng" >{recipe["recipe"]["ingredientLines"].length} {
        getIngredientWordForm(recipe["recipe"]["ingredientLines"].length)}:</h4>
      {
        recipe["recipe"]["ingredientLines"].map((elem)=>
        <p>- {elem}</p>
        )
      }
          </div>
      

    </div>
    </>
    )
}
  