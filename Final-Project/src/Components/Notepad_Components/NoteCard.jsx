import React from 'react'
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import { FaCheck } from 'react-icons/fa';

const NoteCard = ({note, index, deleteItem, updateNote}) => {
  
    return (
        <div className=''>
            {note.isEditing ? (
                <form onSubmit={(event) => {
                    event.preventDefault();
                    updateNote(index, {
                        title: event.target.title.value, content: event.target.content.value
                    })
                }}>
                    <input 
                        name="title"
                        defaultValue={note.title}
                        className='title-input'
                        type='text'
                    />

                    <textarea
                        name='content'
                        defaultValue={note.content}
                        className='content-input'
                        type='text'
                        rows='3'
                    ></textarea>
                    <button type="submit">
                        <FaCheck />
                    </button>

                </form>
            ) : (
                <div className='note w-72 md:w-96'>
                    <h2>{note.title}</h2> 
                    <p>{note.content}</p>  
                    <div className='flex justify-between mt-3'>
                        <EditButton
                            onClick={() => updateNote(index, { isEditing : true})}
                        />
                        <DeleteButton
                            onClick={() => deleteItem(index)} 
                        />
                    </div>
                </div>
            )}

            
        </div>
    );


}

export default NoteCard