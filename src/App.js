import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React,{ useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
function App() {

  const [query, setquery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [isVegan, setIsVegan] = useState(false)
  const [isAlcoholFree, setIsAlcoholFree] = useState(false)
  const [isPorkFree, setIsPorkFree] = useState(false)
  const handleIsVeganChange = (event) => {
    setIsVegan(event.target.checked);
  };
  const handleIsAlcoholFreeChange = (event) => {
    setIsAlcoholFree(event.target.checked);
  };
  const handleIsPorkFree = (event) => {
    setIsPorkFree(event.target.checked);
  };
  const YOUR_APP_ID = `c1e82fe7`;
  const YOUR_APP_KEY = "02a57a9699c30154207dcdae0893170b";
  const url = `https://api.edamam.com/search?q=*20&app_id=c1e82fe7&app_key=02a57a9699c30154207dcdae0893170b&to=100`;
  function getIngredientWordForm(count) {
    const forms = ['ингредиент', 'ингредиента', 'ингредиентов'];
  
   
    if (Number.isInteger(count) && count >= 0) {
   
      if (count % 100 >= 11 && count % 100 <= 14) {
        return forms[2];
      }
  
      
      const lastDigit = count % 10;
      switch (lastDigit) {
        case 1:
          return forms[0];
        case 2:
        case 3:
        case 4:
          return forms[1];
        default:
          return forms[2];
      }
    }
  
    
    return '';
  }
  const renderRecipes = ()=>{
    
    return(
      
      recipes.map((elem)=>  
        renderRecipe(elem))
      )
  }
  useEffect(() => {
    const getRecipeInfo = async () => {
      try {
        const result = await axios.get(url);
        setRecipes(result.data.hits);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getRecipeInfo();
    const getIngInfo = async () => {
      try {
        const result = await axios.get(url);
        setRecipes(result.data.hits);
        console.log(result.data.hits)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    //https://api.edamam.com/api/recipes/v2?type=public&q=all&app_id=c1e82fe7&app_key=02a57a9699c30154207dcdae0893170b
    getIngInfo();
  }, []);
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
   
    return(
      <>  
        {((!isVegan && !isPorkFree && !isAlcoholFree)||
         ((params[0] === isVegan || !isVegan) && (params[1] ===isPorkFree || !isPorkFree)
          && (params[2] ===isAlcoholFree || !isAlcoholFree)
           
          
          ))  ?
        <div className='recipe'>
      <div className='recipeImgBlock'>  
        <img className="recipeImg" src={recipe["recipe"]["image"]} />
        </div>
        <div>  
        <h3 className="recipeDesc" key={uuidv4()}>
          {recipe["recipe"]["label"]}
        </h3>
           
        <h4  className="recipeIng" >{recipe["recipe"]["ingredientLines"].length} {getIngredientWordForm(recipe["recipe"]["ingredientLines"].length)}</h4>
        </div>
      </div>
       :<></>}
      </>
    )
  }
  return (


    <div className="App">
     
       <header className='mainHeader'>
          <a  href = '/'>HolostiakCooking</a>
          <a  href = '/'>Поиск по ингридиентам</a>
          <a  href = '/'>Поиск только по ингридиентам</a>
          <a  href = '/'>Все рецепты</a>
 
       </header>
      
       <div className='content'>
 
        <div className='search'>
          <div className='ingToAdd'>  
            <input className='searchInput' placeholder='Поиск ингридиентов'/>
            <div className='allProducts'> 
            <div className='productDiv'>  <p className='product'>1)Лук </p><AddIcon className='addButton'/> </div>
            <div className='productDiv'>  <p className='product'>1)Лук </p><AddIcon className='addButton'/> </div>
            <div className='productDiv'>  <p className='product'>1)Лук </p><AddIcon className='addButton'/> </div>
            <div className='productDiv'>  <p className='product'>1)Лук </p><AddIcon className='addButton'/> </div>
            <div className='productDiv'>  <p className='product'>1)Лук </p><AddIcon className='addButton'/> </div>
            <div className='productDiv'>  <p className='product'>1)Лук </p><AddIcon className='addButton'/> </div>
            <div className='productDiv'>  <p className='product'>1)Лук </p><AddIcon className='addButton'/> </div>
            <div className='productDiv'>  <p className='product'>1)Лук </p><AddIcon className='addButton'/> </div>
            <div className='productDiv'>  <p className='product'>1)Лук </p><AddIcon className='addButton'/> </div>
            <div className='productDiv'>  <p className='product'>1)Лук </p><AddIcon className='addButton'/> </div>
            <div className='productDiv'>  <p className='product'>1)Лук </p><AddIcon className='addButton'/> </div>
            </div>
          </div>
          <div className='addedIng'>
            <h3>Добавленные ингридиенты:</h3>
            <div className='allProductsAdded'> 
            <div className='productDiv'>  <p className='product'>1)Лук </p><DeleteOutlineIcon className='addButton'/> </div>
            <div className='productDiv'>  <p className='product'>2)Чеснок </p><DeleteOutlineIcon className='addButton'/></div>
            <div className='productDiv'>  <p className='product'>1)Лук </p><DeleteOutlineIcon className='addButton'/> </div>
            <div className='productDiv'>  <p className='product'>2)Чеснок </p><DeleteOutlineIcon className='addButton'/></div>
            <div className='productDiv'>  <p className='product'>1)Лук </p><DeleteOutlineIcon className='addButton'/> </div>
            <div className='productDiv'>  <p className='product'>2)Чеснок </p><DeleteOutlineIcon className='addButton'/></div>
            <div className='productDiv'>  <p className='product'>1)Лук </p><DeleteOutlineIcon className='addButton'/> </div>
            <div className='productDiv'>  <p className='product'>2)Чеснок </p><DeleteOutlineIcon className='addButton'/></div>
            
               </div>
          </div>
        </div>
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
             <a>Всего рецептов: {recipes.length}</a>
          </div>

          {recipes.length !== 0 ? 

          
        renderRecipes()
          
          
            : <h3>Загрузка рецептов...</h3>}
          
          
       
          
        </div>
       </div>
       
    </div>
  );
}

export default App;
