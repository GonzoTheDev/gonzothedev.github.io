import { fromEvent } from 'rxjs';

// Set the default colour to be pastel red
let selectedColor = '#ffcccb';
const defaultOption = document.getElementById('color1');
defaultOption.className = 'selected-color';

// Function to detect and handle requests to change the colour of notes
function changeColor(color, elementId) {
    selectedColor = color;
    const prevColorOption = document.getElementsByClassName('selected-color')[0];
    if (typeof(prevColorOption) != 'undefined' && prevColorOption != null)
    {
        prevColorOption.className = 'color-option';
    }
    const colorOption = document.getElementById(elementId);
    colorOption.className = 'selected-color'
}

// Function to add a new note to the page
function addNote() {

    // Get the notes container
    const notesContainer = document.getElementById('notes-container');

    // Create the note and set the background to selected colour
    const note = document.createElement('div');
    note.className = 'note';
    note.style.backgroundColor = selectedColor;

    // Create the text area, set the placeholder and make it editable
    const textAreaContainer = document.createElement('div');
    textAreaContainer.className = 'editable';
    const textArea = document.createElement('textarea');
    textArea.placeholder = 'Enter your note...';
    textAreaContainer.appendChild(textArea);

    // Create the content div and set the text to the text area value
    const contentDiv = document.createElement('div');
    contentDiv.className = 'note-content';
    contentDiv.innerText = textArea.value;

    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'note-buttons';

     // Functionality to delete the note
     const deleteBtnClick$ = fromEvent(deleteBtn, 'click');
     deleteBtnClick$.subscribe(() => {
         notesContainer.removeChild(note);
     });

     // Functionality to save and edit the note
     const editBtnClick$ = fromEvent(editBtn, 'click');
     editBtnClick$.subscribe(() => {
         const isEditable = textArea.readOnly;
         textArea.readOnly = !isEditable;

         if (!isEditable) {
             textAreaContainer.removeChild(textArea);
             editBtn.innerText = 'Edit';
             contentDiv.innerText = textArea.value;
         } else {
             textAreaContainer.appendChild(textArea);
             editBtn.innerText = 'Save';
             contentDiv.innerText = '';
         }
     });


    // Append the buttons to the buttons container
    buttonsContainer.appendChild(deleteBtn);
    buttonsContainer.appendChild(editBtn);

    // Append the text area, content div and buttons container to the note
    note.appendChild(textAreaContainer);
    note.appendChild(contentDiv);
    note.appendChild(buttonsContainer);

    // Append the note to the notes container
    notesContainer.appendChild(note);
    
}