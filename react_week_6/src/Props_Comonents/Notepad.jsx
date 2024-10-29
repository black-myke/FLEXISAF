import React from 'react'
import NoteCard from './NoteCard'
import notes from './notes'

const Notepad = () => {

  

  return (
    <div className='note-body'>
      {notes.map((notes) => (<NoteCard  key={notes.id} title={notes.title} content={notes.content} />))}
    </div>
  )
}

export default Notepad