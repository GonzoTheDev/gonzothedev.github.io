import React, { useState } from 'react';
import './App.css';
import Note from './Note';

function App() {
    const [selectedColor, setSelectedColor] = useState('#ffcccb');
    const [selectedElementId, setSelectedElementId] = useState('color1');
    const [notes, setNotes] = useState([]);

    const changeColor = (color, elementId) => {
        setSelectedColor(color);
        setSelectedElementId(elementId);
    }


    const addNote = () => {
        setNotes([...notes, { color: selectedColor, text: '' }]);
    }

    const updateNote = (index, text) => {
        const newNotes = [...notes];
        newNotes[index].text = text;
        setNotes(newNotes);
    }

    const deleteNote = (index) => {
        const newNotes = [...notes];
        newNotes.splice(index, 1);
        setNotes(newNotes);
    }

    return (
        <div className="App">
            <div className="color-selector">
                <div className={`color-option ${selectedElementId === 'color1' ? 'selected-color' : ''}`} style={{ backgroundColor: '#ffcccb' }} onClick={() => changeColor('#ffcccb', 'color1')}></div>
                <div className={`color-option ${selectedElementId === 'color2' ? 'selected-color' : ''}`} style={{ backgroundColor: '#a7e9af' }} onClick={() => changeColor('#a7e9af', 'color2')}></div>
                <div className={`color-option ${selectedElementId === 'color3' ? 'selected-color' : ''}`} style={{ backgroundColor: '#add8e6' }} onClick={() => changeColor('#add8e6', 'color3')}></div>
                <div className={`color-option ${selectedElementId === 'color4' ? 'selected-color' : ''}`} style={{ backgroundColor: '#ffd700' }} onClick={() => changeColor('#ffd700', 'color4')}></div>
                <button onClick={addNote}>Add Note</button>
            </div>
            <div className="notes-container">
                {notes.map((note, index) => (
                    <Note key={index} note={note} updateNote={(text) => updateNote(index, text)} deleteNote={() => deleteNote(index)} />
                ))}
            </div>
        </div>
    );
}

export default App;