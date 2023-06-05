import './Recipes.css'
import React, {useState, useEffect} from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { Recipe } from '../Recipe/Recipe';
export const Recipes = () =>{
  const [recipes, setRecipes] = useState([]);
  
  const [isVegan, setIsVegan] = useState(false)
  const [isAlcoholFree, setIsAlcoholFree] = useState(false)
  const [isPorkFree, setIsPorkFree] = useState(false)
  const [tRecipe,  setTRecipe] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [receipeVisibility, setReceipeVisibility] = useState(false)
  const url = `https://api.edamam.com/search?q=*20&app_id=c1e82fe7&app_key=02a57a9699c30154207dcdae0893170b&to=100`;
  function getIngredientWordForm(count) {
    if (count === 1) {
      return 'ingredient';
    } else {
      return 'ingredients';
    }
  }
   
  useEffect(() => {
    const getRecipeInfo = async () => {
      try {
        const result = await axios.get(url);
        setRecipes(result.data.hits);
        console.log(result.data.hits)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getRecipeInfo();
    
  }, []);
  const handleIsVeganChange = (event) => {
    setIsVegan(event.target.checked);
  };
  const handleIsAlcoholFreeChange = (event) => {
    setIsAlcoholFree(event.target.checked);
  };
  const handleIsPorkFree = (event) => {
    setIsPorkFree(event.target.checked);
  };
  const handleInputValueChange = (event) =>{
    setInputValue(event.target.value);
  }
  const renderRecipe =(recipe) =>{
    const params = [false, false, false];
    recipe["recipe"]["healthLabels"].map((elem)=>
    {if (elem == 'Vegetarian'){
      params[0] = true
    }
    if (elem == 'Pork-Free'){
      params[1] = true
    }
    if (elem == 'Alcohol-Free'){
      params[2] = true
    }
    }
    
    )
   const recipeClickHandler = (recipe) =>{
    setReceipeVisibility(true)
    setTRecipe(recipe)
   }
    return(
      <>  
        {((!isVegan && !isPorkFree && !isAlcoholFree)||
         ((params[0] === isVegan || !isVegan) && (params[1] ===isPorkFree || !isPorkFree)
          && (params[2] ===isAlcoholFree || !isAlcoholFree)
           
          
          ) )  && (recipe["recipe"]["label"].toLowerCase().includes(inputValue)) ?
        <div className='recipe'  onClick={() => recipeClickHandler(recipe)}>
      <div className='recipeImgBlock'>  
        <img className="recipeImg" src={recipe["recipe"]["image"]} />
        </div>
        <div>  
        <h3 className="recipeDesc" key={uuidv4()} >
          {recipe["recipe"]["label"]}
        </h3>
           
        <h4  className="recipeIng" >{recipe["recipe"]["ingredientLines"].length} {getIngredientWordForm(recipe["recipe"]["ingredientLines"].length)}</h4>
        </div>
      </div>
       :<></>}
      </>
    )
  }
  const renderRecipes = ()=>{
    
    if (receipeVisibility)
      return <Recipe  
      recipe = {tRecipe} 
      getIngredientWordForm ={getIngredientWordForm}
      setReceipeVisibility = {setReceipeVisibility}
      />
    
    else return(
      
      recipes.map((elem)=>  
        renderRecipe(elem))
      )
  }


  //main return
  return(
    <div className='recipes'>
    <div className='recipeHeader'>
      <a>Vegetarian</a>
      <input type="checkbox"
      id="myCheckbox" 
      className="checkbox"
      checked={isVegan}
      onChange={handleIsVeganChange}
      />

      <a>Alcohol-Free</a>
      <input type="checkbox"
      id="myCheckbox" 
      className="checkbox"
      checked={isAlcoholFree}
      onChange={handleIsAlcoholFreeChange}
      />
      <a>Pork-Free</a>
       <input type="checkbox"
      id="myCheckbox" 
      className="checkbox"
      checked={isPorkFree}
      onChange={handleIsPorkFree}
      />
       <a> <input 
       className='searchAllInput' 
       placeholder='Search for recipes'
       value = {inputValue}
       onChange={handleInputValueChange}
       /> </a>
       
    </div>
 
    {recipes.length !== 0 ? 

    
      renderRecipes()
    
    
      : <h3>Loading recipes...</h3>} 
    
       
 
    
  </div>)
}