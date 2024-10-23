import React from 'react'



const Stack = (props) => {
  return (
    <div className='menu-list'>

        <h2>{props.dishName}</h2>
        <img src={props.dishImg} alt="food-avatar" />

        <p>Price: <span>${props.price}</span></p>
        <p>Side Dish: {props.sideDish}</p>
    </div>
  )
}

export default Stack