let selectedColor = '#ffcccb';

function changeColor(color, elementId) {
    selectedColor = color;
    const colorOption = document.getElementById(elementId);
    colorOption.className = 'selected-color'
}

function addNote() {
    const notesContainer = document.getElementById('notes-container');

    const note = document.createElement('div');
    note.className = 'note';
    note.style.backgroundColor = selectedColor;

    const textAreaContainer = document.createElement('div');
    textAreaContainer.className = 'editable';

    const textArea = document.createElement('textarea');
    textArea.placeholder = 'Enter your note...';
    textAreaContainer.appendChild(textArea);

    const contentDiv = document.createElement('div');
    contentDiv.className = 'note-content';
    contentDiv.innerText = textArea.value;

    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'note-buttons';

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.onclick = function () {
        notesContainer.removeChild(note);
    };

    const editBtn = document.createElement('button');
    editBtn.innerText = 'Save';
    editBtn.onclick = function () {
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
    };

    buttonsContainer.appendChild(deleteBtn);
    buttonsContainer.appendChild(editBtn);

    note.appendChild(textAreaContainer);
    note.appendChild(contentDiv);
    note.appendChild(buttonsContainer);

    notesContainer.appendChild(note);
}