import React from 'react';

const Note = (props) => {
  if (!props.currentNote) {
    return(
      <div>
        Please add a new note
      </div>
    )
  } else {
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
  }
}

export default Note;
