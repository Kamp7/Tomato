/* eslint-disable react/prop-types */
import './ExploreMenu.css'

import {menu_list} from '../../assets/assets.js'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu'>
    <h1>Explore Menu</h1>
    <div className="explore-menu-text">
      <h2>Take a look at our menu</h2>
      <p>Discover a wide range of fresh and delicious dishes to satisfy your cravings. From classic comfort food to innovative culinary creations, our menu is designed to satisfy every palate.</p>
    </div>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name ? "All" : item.menu_name)} key={index} className="explore-menu-list-item">
                <img className={category===item.menu_name ? "active" : ""} src={item.menu_image} alt="" />    
                <p>{item.menu_name}</p>
                </div>
            )
        })}
        </div>
      <hr />
      </div>
      
  )
}


export default ExploreMenu
