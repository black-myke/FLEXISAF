import React from 'react'

const NoteCard = (props) => {
  return (
    <div className='note'>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
    </div>
  )
}

export default NoteCard