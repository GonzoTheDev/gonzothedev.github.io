const { fromEvent, Subject } = rxjs;

class Note {
    constructor(color, parent = null) {
        this.color = color;
        this.parent = parent;
        this.children = [];

        // Create the note element
        this.element = document.createElement('div');
        this.element.className = 'note';
        this.element.style.backgroundColor = this.color;

        // Create the text area, set the placeholder and make it editable
        this.textAreaContainer = document.createElement('div');
        this.textAreaContainer.className = 'editable';
        this.textArea = document.createElement('textarea');
        this.textArea.placeholder = 'Enter your note...';
        this.textAreaContainer.appendChild(this.textArea);

        // Create the content div and set the text to the text area value
        this.contentDiv = document.createElement('div');
        this.contentDiv.className = 'note-content';
        this.contentDiv.innerText = this.textArea.value;

        // Create the buttons container
        this.buttonsContainer = document.createElement('div');
        this.buttonsContainer.className = 'note-buttons';

        // Functionality to delete the note
        this.deleteBtn = document.createElement('button');
        this.deleteBtn.innerText = 'Delete';

        // Subscribe to delete button clicks
        fromEvent(this.deleteBtn, 'click').subscribe(() => {
            this.deleteNote();
        });

        // Functionality to add child note
        this.addChildBtn = document.createElement('button');
        this.addChildBtn.innerText = 'Add Child';

        // Subscribe to add child button clicks
        fromEvent(this.addChildBtn, 'click').subscribe(() => {
            this.addChildNote();
        });

        // Functionality to save and edit the note
        this.editBtn = document.createElement('button');
        this.editBtn.innerText = 'Save';

        // Subscribe to edit button clicks
        fromEvent(this.editBtn, 'click').subscribe(() => {
            this.toggleEdit();
        });

        // Append the buttons to the buttons container
        this.buttonsContainer.appendChild(this.deleteBtn);
        this.buttonsContainer.appendChild(this.addChildBtn);
        this.buttonsContainer.appendChild(this.editBtn);

        // Append the text area, content div, and buttons container to the note
        this.element.appendChild(this.textAreaContainer);
        this.element.appendChild(this.contentDiv);
        this.element.appendChild(this.buttonsContainer);

        // Append the note to the notes container
        if (!parent) {
            notesContainer.appendChild(this.element);
        } else {
            parent.children.push(this);
            parent.element.appendChild(this.element);
        }
    }

    deleteNote() {
        // Remove the note from the parent's children array
        if (this.parent) {
            this.parent.children = this.parent.children.filter(child => child !== this);
        }

        // Remove the note from the DOM
        this.element.parentNode.removeChild(this.element);
    }

    addChildNote() {
        new Note(selectedColor, this);
    }

    toggleEdit() {
        const isEditable = this.textArea.readOnly;
        this.textArea.readOnly = !isEditable;

        if (!isEditable) {
            this.textAreaContainer.removeChild(this.textArea);
            this.editBtn.innerText = 'Edit';
            this.contentDiv.innerText = this.textArea.value;
        } else {
            this.textAreaContainer.appendChild(this.textArea);
            this.editBtn.innerText = 'Save';
            this.contentDiv.innerText = '';
        }
    }
}

// Set the default colour to be pastel red
let selectedColor = '#ffcccb';

const colorOptions = document.querySelectorAll('.color-option');
const addNoteBtn = document.getElementById('add-note-btn');
const notesContainer = document.getElementById('notes-container');

// Observable for color option clicks
let colorOptionClick$ = fromEvent(colorOptions, 'click');

// Subscribe to color option clicks
colorOptionClick$.subscribe((event) => {
    const color = event.target.style.backgroundColor;
    selectedColor = color;
    colorOptions.forEach((option) => {
        option.classList.remove('selected-color');
    });
    const colorOption = document.getElementById(event.target.id);
    colorOption.classList.add('selected-color');
});

// Subscribe to add note button clicks
const addNoteBtnClick$ = fromEvent(addNoteBtn, 'click');
addNoteBtnClick$.subscribe(() => {
    new Note(selectedColor);
});
