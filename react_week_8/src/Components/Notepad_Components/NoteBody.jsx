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

    return (
        <div>
            <p className="mid-text">Record Every Beautiful Moment In Your Journal</p>

            <form onSubmit={addNote}>
                <InputArea input={input} handleInput={handleInput} />  
                <AddButton label="Add" onClick={addNote} />               
            </form>
            
            <div className="note-body">
                {note.map((notes, index) => (
                    <NoteCard
                        key={index}
                        note={notes}                
                        index={index}               
                        deleteItem={deleteItem}     
                    />
                ))}
            </div>
        </div>
    );

}

export default NoteBody