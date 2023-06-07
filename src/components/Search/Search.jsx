import './Search.css'
import React, {useEffect, useCallback, useState} from 'react'
import axios from "axios";
 
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


export const Search =({addIng, addedIng, deleteIng, ingredients, setIngredients}) =>{
    
     
   

    
      const foods = [
        'beef',
        'chicken',
        'pork',
        'lamb',
        'rabbit',
        'broccoli',
        'carrot',
        'tomato',
        'cucumber',
        'spinach',
        'apple',
        'banana',
        'orange',
        'pear',
        'strawberry',
        'wine',
        'beer',
        'vodka',
        'rum',
        'whiskey',
        'bread',
        'pasta',
        'rice',
        'grain',
        'macaroni',
        'turkey',
        'duck',
        'sausage',
        'bacon',
        'cheese',
        'cabbage',
        'onion',
        'pepper',
        'potato',
        'mango',
        'pomegranate',
        'apricot',
        'plum',
        'lemon',
        'vodka',
        'champagne',
        'cognac',
        'liqueur',
        'whiskey',
        'baguette',
      ];
       const [inputValue, setInputValue] = useState('')
      const handleInputValueChange = (e) =>{
        setInputValue(e.target.value)
      }
   
    return(
      
        <div className='search'>
             
          <div className='ingToAdd'>  
          <h3>Select main ingredients:</h3>
            <input 
            className='searchInput' 
            placeholder='Search for ingredients'
            value = {inputValue}
            onChange={handleInputValueChange}
            />
            <div className='allProducts'> 
            {foods.length !== 0?
            <>  
            {foods.filter((element) =>  element.toLowerCase().includes(inputValue.toLowerCase()))
            
            .map((elem, index) => 
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
             <div className='productDiv'>  <p className='product'>{index+1}) {elem}
              </p><DeleteOutlineIcon 
              className='addButton' 
              onClick = {() =>deleteIng(elem)}
              
              /> </div>
            
            )
                }</>:<p>You haven't added anything yet</p>
            } 
            
               </div>
          </div>
        </div>
    )
}