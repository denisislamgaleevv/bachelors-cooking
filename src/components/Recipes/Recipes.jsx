import './Recipes.css'
import React, {useState, useEffect} from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { Recipe } from '../Recipe/Recipe';
export const Recipes = ({addedIng}) =>{
  const [recipes, setRecipes] = useState([]);
  
  const [isVegan, setIsVegan] = useState(false)
  const [isAlcoholFree, setIsAlcoholFree] = useState(false)
  const [isPorkFree, setIsPorkFree] = useState(false)
  const [tRecipe,  setTRecipe] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [receipeVisibility, setReceipeVisibility] = useState(false)
   
  let url = `https://api.edamam.com/search?q=*20&app_id=c1e82fe7&app_key=02a57a9699c30154207dcdae0893170b&to=20`;
  
  if (addedIng.length !== 0){
    url = `https://api.edamam.com/search?q=${addedIng}&app_id=c1e82fe7&app_key=02a57a9699c30154207dcdae0893170b&to=20`;
  }
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
    
  }, [addedIng]);
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
  function convertArrayToString(arr) {
    if (arr.length === 0) {
      return "";
    }
  
    const firstElement = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
    if (arr.length === 1) {
      return firstElement;
    }
    const remainingElements = arr.slice(1).join(" & ");
  
    return firstElement + " & " + remainingElements;
  }

  //main return
  return(
    <div className='recipes'>
       {!receipeVisibility?
       <>  
       {addedIng.length === 0?  
      <h3 className = 'recipeIndicator'>
        All receipes
        </h3>
        :
        <h3 className = 'recipeIndicator'>
        {convertArrayToString(addedIng)} receipes
        </h3>
      }</> : <></>}
      {!receipeVisibility?
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
       
    </div> : <></>}
 
    {recipes.length !== 0 ? 

    
      renderRecipes()
    
    
      : <h3>Loading recipes...</h3>} 
    
       
 
    
  </div>)
}