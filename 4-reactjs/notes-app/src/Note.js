import React, { useState, useEffect } from 'react';

function Note({ note, updateNote, deleteNote }) {

  // Initialize variables
  const [isEditable, setIsEditable] = useState(true);
  const [text, setText] = useState(note.text);
  const sentiment = note.sentiment;

  // Update text when note prop changes
  useEffect(() => {
    setText(note.text);
  }, [note]);

  // Toggle editable state
  const toggleEditable = () => {
    if (isEditable) {
      updateNote(text);
    }
    setIsEditable(!isEditable);
  };
  
  // Render note content
  const renderNoteContent = () => {

    // Set sentiment text colour
    const sentimentColor = sentiment === 'positive' ? '#2ecc71' :
    sentiment === 'negative' ? '#d95b43' : '#95a5a6';

    return (
      <div className="note" style={{ backgroundColor: note.color }}>
        <div className="note-content">
          {isEditable && (
            <textarea
              placeholder="Enter your note..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              onFocus={() => setIsEditable(true)}
            />
          )}
          {!isEditable && (
            <div>
              <p style={{ color: sentimentColor }}>{text}</p>
              <p className="sentiment">{sentiment}</p>
            </div>
          )}
        </div>
        <div className="note-buttons">
          <button onClick={deleteNote}>Delete</button>
            <button onClick={toggleEditable}>{isEditable ? 'Save' : 'Edit'}</button>
        </div>
      </div>
    );
  };

  return renderNoteContent();
}

export default Note;