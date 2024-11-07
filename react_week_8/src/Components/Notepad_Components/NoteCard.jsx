import React from 'react'
import Button from './DeleteButton';

const NoteCard = ({note, index, deleteItem}) => {
  
    return (
        <div className='note'>
            <h2>{note.title}</h2> 
            <p>{note.content}</p>  
            <Button
                label="DELETE"
                onClick={() => deleteItem(index)} 
            />
        </div>
    );


}

export default NoteCard