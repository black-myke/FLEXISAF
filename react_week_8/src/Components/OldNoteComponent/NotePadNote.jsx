import React, { useState } from 'react';

const NotePadNote = () => {

    const[input, takeInput] = useState({
        title: "",
        content: ""
    });

    const [note, setNote] = useState([]);

    function handleInput(event) {
        const {name, value} = event.target;

        takeInput(prevValue => {
            if(name === 'title') {
                return {
                    title: value,
                    content: prevValue.content
                }
            } else if (name === 'content') {
                return {
                    title: prevValue.title,
                    content: value
                }
            }
        })
    }

    function addNote(event) {
        event.preventDefault();
        setNote((prevInput) => {
            return [...prevInput, input];
        })

        takeInput({
            title: "",
            content: ""
        })

    }

    function deleteItem(id) {
        setNote((prevList) => {
            return prevList.filter(
                (item, index) => {
                    return index !== id;
                }
            )
        })
        
    }


    return (
        <div>
            <form onSubmit={addNote}>
                <input 
                type='text' 
                name='title' 
                value={input.title} 
                onChange={handleInput} 
                placeholder='Title' 
                />

                <textarea 
                type='text' 
                name='content' 
                value={input.content} 
                onChange={handleInput} 
                placeholder='Write your idea...' 
                rows='3' 
                />

                <button onClick={addNote}>Add</button>
            </form>

            {note.map((notes, index) => {
                return(
                    <div className='note' key={index} id={index}>
                        <h2>{notes.title}</h2>
                        <p>{notes.content}</p>
                        <button onClick={() => deleteItem(index)} className="delete">DELETE</button>
                    </div>
                )
            })}
        </div>
    )
}

export default NotePadNote;