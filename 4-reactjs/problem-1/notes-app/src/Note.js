import React, { useState, useEffect } from 'react';

function Note({ note, updateNote, deleteNote }) {
    const [isEditable, setIsEditable] = useState(true);
    const [text, setText] = useState(note.text);

    useEffect(() => {
        setText(note.text);
    }, [note]);

    const toggleEditable = () => {
        setIsEditable(!isEditable);
        if (isEditable) {
            updateNote(text);
        }
    }

    return (
        <div className="note" style={{ backgroundColor: note.color }}>
            {isEditable ? (
                <textarea placeholder="Enter your note..." value={text} onChange={(e) => setText(e.target.value)} />
            ) : (
                <div className="note-content">{note.text}</div>
            )}
            <div className="note-buttons">
                <button onClick={deleteNote}>Delete</button>
                <button onClick={toggleEditable}>{isEditable ? 'Save' : 'Edit'}</button>
            </div>
        </div>
    );
}

export default Note;