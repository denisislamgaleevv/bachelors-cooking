import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React,{ useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
function App() {

  const [query, setquery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const YOUR_APP_ID = `c1e82fe7`;
  const YOUR_APP_KEY = "02a57a9699c30154207dcdae0893170b";
  const url = `https://api.edamam.com/search?q=all&app_id=c1e82fe7&app_key=02a57a9699c30154207dcdae0893170b&to=100`;
 
 
  useEffect(() => {
    const getRecipeInfo = async () => {
      try {
        const result = await axios.get(url);
        setRecipes(result.data.hits);
        console.log(result.data.hits);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getRecipeInfo();
    console.log('1');
  }, []);
  const renderRecipe =(recipe) =>{
    return(
     <div className='recipe'>
      <div className='recipeImgBlock'>  
        <img className="recipeImg" src={recipe["recipe"]["image"]} />
        </div>
        <h3 className="recipeDesc" key={uuidv4()}>
          {recipe["recipe"]["label"]}
        </h3>
      </div>
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
            <div className='productDiv'>  <p className='product'>1)Лук </p><button className='addButton'>Добавить</button></div>
            <div className='productDiv'>  <p className='product'>2)Чеснок </p><button className='addButton'>Добавить</button></div>
            <div className='productDiv'>  <p className='product'>3)Пряник </p><button className='addButton'>Добавить</button></div>
            <div className='productDiv'>  <p className='product'>4)Лук </p><button className='addButton'>Добавить</button></div>
            <div className='productDiv'>  <p className='product'>1)Лук </p><button className='addButton'>Добавить</button></div>
            <div className='productDiv'>  <p className='product'>2)Чеснок </p><button className='addButton'>Добавить</button></div>
            <div className='productDiv'>  <p className='product'>3)Пряник </p><button className='addButton'>Добавить</button></div>
            <div className='productDiv'>  <p className='product'>4)Лук </p><button className='addButton'>Добавить</button></div>
            <div className='productDiv'>  <p className='product'>1)Лук </p><button className='addButton'>Добавить</button></div>
            <div className='productDiv'>  <p className='product'>2)Чеснок </p><button className='addButton'>Добавить</button></div>
            <div className='productDiv'>  <p className='product'>3)Пряник </p><button className='addButton'>Добавить</button></div>
            <div className='productDiv'>  <p className='product'>4)Лук </p><button className='addButton'>Добавить</button></div>
            </div>
          </div>
          <div className='addedIng'>
            <h3>Добавленные ингридиенты:</h3>
            <div className='allProductsAdded'> 
            <div className='productDiv'>  <p className='product'>1)Лук </p><button className='addButton'>Удалить</button></div>
            <div className='productDiv'>  <p className='product'>2)Чеснок </p><button className='addButton'>Удалить</button></div>
            <div className='productDiv'>  <p className='product'>3)Пряник </p><button className='addButton'>Удалить</button></div>
            <div className='productDiv'>  <p className='product'>4)Лук </p><button className='addButton'>Удалить</button></div>
            <div className='productDiv'>  <p className='product'>1)Лук </p><button className='addButton'>Удалить</button></div>
            <div className='productDiv'>  <p className='product'>2)Чеснок </p><button className='addButton'>Удалить</button></div>
            <div className='productDiv'>  <p className='product'>3)Пряник </p><button className='addButton'>Удалить</button></div>
            <div className='productDiv'>  <p className='product'>4)Лук </p><button className='addButton'>Удалить</button></div>
            <div className='productDiv'>  <p className='product'>1)Лук </p><button className='addButton'>Удалить</button></div>
            <div className='productDiv'>  <p className='product'>2)Чеснок </p><button className='addButton'>Удалить</button></div>
            <div className='productDiv'>  <p className='product'>3)Пряник </p><button className='addButton'>Удалить</button></div>
            <div className='productDiv'>  <p className='product'>4)Лук </p><button className='addButton'>Удалить</button></div>
            </div>
          </div>
        </div>
        <div className='recipes'>
          <div className='recipeHeader'>
            <a>Веганское</a>
            <a>Не веганское</a>
            <a>С сосисками</a>
          </div>

          {recipes.length !== 0 ? 
          recipes.map((elem)=>  
          renderRecipe(elem)
          
          )
            : <h3>Загрузка рецептов...</h3>}
          
          
       
          
        </div>
       </div>
       
    </div>
  );
}

export default App;
