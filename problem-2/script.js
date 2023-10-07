let selectedColor = '#ffcccb';

function changeColor(color) {
    selectedColor = color;
}

function addNote() {
    const notesContainer = document.getElementById('notes-container');

    const note = document.createElement('div');
    note.className = 'note';
    note.style.backgroundColor = selectedColor;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.onclick = function () {
        notesContainer.removeChild(note);
    };

    const editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.onclick = function () {
        const newText = prompt('Edit the note:', note.innerText);
        if (newText !== null) {
            note.innerText = newText;
        }
    };

    note.appendChild(deleteBtn);
    note.appendChild(editBtn);

    notesContainer.appendChild(note);
}