/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './FoodDisplay.css'
import {StoreContext} from '../../context/StoreContext'
import { useContext } from 'react'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
    const {food_list}=useContext(StoreContext);
    return (
    <div className="food-display">
    <h1>FOOD ITEMS</h1>
    { 
        food_list.map((item,index)=>{
             if(item.category===category || category==="All")
            {
            return(
                  <FoodItem key={index} id={item._id} category={category} name={item.name} image={item.image} price={item.price} description={item.description} />
                 )
            }
    })
    }
    </div>
  )
}

export default FoodDisplay;
