import React from 'react';

const Note = (props) => {
  if (props.currentNote) {
    return(
      <div className='row'>
        <div className='col-xs-10 form-group'>
          <input
            value={props.currentNote.title}
            placeholder='Title goes here'
            onChange={(e) => props.handleTitleChange(e)}
            className='form-control'
          />
          <textarea
            value={props.currentNote.value}
            placeholder='Edit your note here...'
            onChange={(e) => props.handleValueChange(e)}
            className='form-control'
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
