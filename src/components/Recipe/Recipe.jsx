import './Recipe.css'
import React from 'react'
import { v4 as uuidv4 } from "uuid";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
 

export const Recipe = ({recipe, getIngredientWordForm, setReceipeVisibility}) =>{
    return(
        <> 

<div className='backContainer' onClick = {()=>setReceipeVisibility(false)}>
     
      <div><ArrowBackIcon className='ArrowBackIcon'/></div>
      <div><span className = 'backSpan'>Back</span> </div>
    </div>
        
         <div className='RecipeMain'  >
        <div > 
        <h2  key={uuidv4()} >
          {recipe["recipe"]["label"]}
        </h2>
        <img width={'200px'} src={recipe["recipe"]["image"]} />
        </div>
        <div className='recipeIngredients'>  
        
        <h3  className="recipeIng" >{recipe["recipe"]["ingredientLines"].length} {
        getIngredientWordForm(recipe["recipe"]["ingredientLines"].length)}:</h3>
      {
        recipe["recipe"]["ingredientLines"].map((elem)=>
        <p>- {elem}</p>
        )
      }
       
          </div>
          

    </div>
    <div className='instructions'> 
<h3>Instructions:</h3>
Season the chicken breasts with salt and black pepper on both sides.
Heat olive oil in a large skillet over medium heat.
Add the chicken breasts to the skillet and cook until browned on both sides, about 4-5 minutes per side. Remove the chicken from the skillet and set aside.
In the same skillet, add minced garlic and sauté for about 1 minute until fragrant.
Pour in the heavy cream and bring it to a simmer.
Stir in grated Parmesan cheese and Italian seasoning. Continue cooking and stirring until the sauce thickens, about 2-3 minutes.
Return the chicken breasts to the skillet and cook for an additional 5-7 minutes, or until the chicken is cooked through and the sauce has thickened.
Garnish with fresh parsley and serve the creamy garlic Parmesan chicken with your favorite side dishes like pasta, rice, or vegetables.
</div>
    </>
    )
}
  