import React from 'react'
import { FaTrash } from 'react-icons/fa'

const DeleteButton = ({onClick, label}) => {
  return (
    <button className='delete-btn' 
      onClick={onClick}>  
        <FaTrash className=' text-dullRed transform transition-transform duration-300
        hover:scale-110 active:scale-75 hover:text-deepRed'></FaTrash>                
    </button>
  )
}

export default DeleteButton