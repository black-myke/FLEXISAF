import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddButton = ({onClick, label}) => {
  return (
    <button 
      className='bg-vibrantGreen p-4 rounded-full transform transition-transform duration-300 
        hover:scale-105 active:scale-75 absolute -bottom-8 -right-6' 
      onClick={onClick}>  
        <FaPlus className='text-2xl font-normal text-white'></FaPlus>               
    </button>
  )
}

export default AddButton