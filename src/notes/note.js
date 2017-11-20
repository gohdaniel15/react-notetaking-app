import React from 'react';

const Note = (props) => {
  if (props.currentNote) {
    return(
      <div>
        <div>
          <input
            value={props.currentNote.title}
            placeholder='Title goes here'
            onChange={(e) => props.handleTitleChange(e)}
          />
        </div>
        <div>
          <textarea
            value={props.currentNote.value}
            placeholder='Edit your note here...'
          />
        </div>
      </div>
    )
  } else {
    return(
      <div>
        Please add a new note
      </div>
    )
  }
}

export default Note;
