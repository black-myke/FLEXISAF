import React from 'react'
import { FaPen } from 'react-icons/fa'

const EditButton = (onClick, label) => {
  return (
    <div>
        <button 
          className='edit-btn'
          onClick={onClick}
        >  
        <FaPen className=' text-vibrantGreen float-left transform transition-transform duration-300
        hover:scale-110 active:scale-75 hover:text-white'></FaPen>               
        </button>
    </div>
  )
}

export default EditButton