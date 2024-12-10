import React, {useState} from 'react'
import InputArea from './InputArea';
import NoteCard from './NoteCard';
import AddButton from './AddButton';

const NoteBody = () => {
  
    const [input, takeInput] = useState({
        title: "",
        content: ""
    });

    const [note, setNote] = useState([]);

    function handleInput(event) {
        const { name, value } = event.target;
        takeInput(prevValue => ({
            ...prevValue,
            [name]: value
        }));
    }

    function addNote(event) {
        event.preventDefault();
        setNote(prevNotes => [...prevNotes, input]);
        takeInput({ title: "", content: "" });
    }

    function deleteItem(id) {
        setNote(prevList => prevList.filter((_, index) => index !== id));
    }

    function updateNote(index, updatedValues) {
        setNote((prevNote) => prevNote.map((note, i) => 
            i === index ? {
                ...note, ...updatedValues
            } : note)
        );
    }

    return (
        <div>

            <form onSubmit={addNote}>
                <InputArea input={input} handleInput={handleInput} />  
                <AddButton onClick={addNote} />               
            </form>
            
            <div className="note-body block mx-auto">
                {note.map((notes, index) => (
                    <NoteCard
                        key={index}
                        note={notes}                
                        index={index}               
                        deleteItem={deleteItem}
                        updateNote={updateNote}
                    />
                ))}
            </div>
        </div>
    );

}

export default NoteBody