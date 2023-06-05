import './Search.css'
import React, {useEffect, useCallback, useState} from 'react'
import axios from "axios";
 
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


export const Search =() =>{
    const url = `https://api.edamam.com/search?q=*20&app_id=c1e82fe7&app_key=02a57a9699c30154207dcdae0893170b&to=10`;
    const [recipes, setRecipes] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [addedIng, setAddedIng]=useState([]);
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
        recipes.map((elem)=>{
            elem.recipe.ingredients.map((ing) => 
                setIngredients(ingredients => [...ingredients, ing.text])
            )
             
          })
        
      }, [recipes]);

    const addIng = (ing) =>{
        const copy = addedIng
        copy.push(ing)
        setAddedIng(  copy)
    }
    const deleteIng = (ing) =>{

    }
    return(
      
        <div className='search'>
             
          <div className='ingToAdd'>  
            <input className='searchInput' placeholder='Search for ingredients'/>
            <div className='allProducts'> 
            {ingredients.length !== 0?
            <>  
            {ingredients.map((elem, index) => 
                <div className='productDiv'>  
                <p className='product'>{index+1}) {elem} </p>
                <AddIcon className='addButton' onClick ={  ()=> addIng(elem)}/> 
                </div>
                )} </>
            :<h4 style ={{marginLeft: '10px'}}>Loading ingredients...</h4>
            
             
                }
            </div>
          </div>
          <div className='addedIng'>
            <h3>Added ingredients:</h3>
            <div className='allProductsAdded'> 
            {
            addedIng.length != 0? <>  {
            addedIng.map((elem, index)=>
             <div className='productDiv'>  <p className='product'>{index+1}) {elem} </p><DeleteOutlineIcon className='addButton'/> </div>
            
            )
                }</>:<p>You haven't added anything yet</p>
            } 
            
               </div>
          </div>
        </div>
    )
}