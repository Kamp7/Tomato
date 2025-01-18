/* eslint-disable react/prop-types */
import './FoodItem.css'

const FoodItem = ({key,id,category,name,image,price,description,rating}) => {
  return (
    <div className='food-item'>
      <div className="food-item-img">
        <img src={image} alt={name} />
      </div>
      <div key={key} className="food-item-info">
        <h2>{name}</h2>
        <p>ID: {id}</p>
        <p>Category: {category}</p>
        <p>Description: {description}</p>
        <p>Price: ${price}</p>
        <img src={rating} alt=""/>
      </div>
    </div>
  )
}
export default FoodItem;


