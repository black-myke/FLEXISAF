import React from 'react'



const Stack = (props) => {
  return (
    <div className='menu-list'>

        <img src={props.dishImg} alt="food-avatar" />

        <h3>{props.dishName}</h3>
        <p>Price: <span>${props.price}</span></p>
        <p>Side Dish: {props.sideDish}</p>
        <button>Place Order</button>
    </div>
  )
}

export default Stack