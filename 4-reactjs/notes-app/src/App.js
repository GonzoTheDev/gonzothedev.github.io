import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Note from './Note';
import VaderSentiment from 'vader-sentiment';

const vader = VaderSentiment;

function App() {
  // Initialize variables
  const [selectedColor, setSelectedColor] = useState('#ffcccb');
  const [selectedElementId, setSelectedElementId] = useState('color1');
  const [notes, setNotes] = useState([]);

  // Change color of selected color option
  const changeColor = (color, elementId) => {
    setSelectedColor(color);
    setSelectedElementId(elementId);
  };

  // Add new note
  const addNote = () => {
    const newNote = {
      color: selectedColor,
      text: '',
    };
    const sentimentScore = vader.SentimentIntensityAnalyzer.polarity_scores(newNote.text);
    newNote.sentiment = sentimentScore.compound >= 0.1 ? 'positive' :
      sentimentScore.compound <= -0.1 ? 'negative' : 'neutral';

    setNotes([...notes, newNote]);
  };

  // Update note
  const updateNote = (index, text) => {
    const newNotes = [...notes];
    newNotes[index].text = text;
  
    // Analyze sentiment of updated note
    const sentimentScore = vader.SentimentIntensityAnalyzer.polarity_scores(newNotes[index].text);
    newNotes[index].sentiment = sentimentScore.compound >= 0.1 ? 'positive' :
      sentimentScore.compound <= -0.1 ? 'negative' : 'neutral';
  
    setNotes(newNotes);
  };

  // Delete note
  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  // Initialize data variable to store API response
  const [data, setData] = useState(null);

  // fetch data from a url endpoint
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
        {
          method: 'GET',
          headers: {
            accept: 'application/json',
            'X-RapidAPI-Key': 'ecf3846984msh8a33426500c76f2p10bbccjsnca47e1347ed1',
            'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
          },
        },
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div class="left-column">
      {data && (
        <div>
          <h2>Chuck Norris Fact of the Day!</h2>
          <p>{data.value}</p>
        </div>
      )}
      <div className="color-selector">
        <div className={`color-option ${selectedElementId === 'color1' ? 'selected-color' : ''}`} style={{ backgroundColor: '#ffcccb' }} onClick={() => changeColor('#ffcccb', 'color1')}></div>
        <div className={`color-option ${selectedElementId === 'color2' ? 'selected-color' : ''}`} style={{ backgroundColor: '#a7e9af' }} onClick={() => changeColor('#a7e9af', 'color2')}></div>
        <div className={`color-option ${selectedElementId === 'color3' ? 'selected-color' : ''}`} style={{ backgroundColor: '#add8e6' }} onClick={() => changeColor('#add8e6', 'color3')}></div>
        <div className={`color-option ${selectedElementId === 'color4' ? 'selected-color' : ''}`} style={{ backgroundColor: '#ffd700' }} onClick={() => changeColor('#ffd700', 'color4')}></div>
        <button onClick={addNote}>Add Note</button>
      </div>
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