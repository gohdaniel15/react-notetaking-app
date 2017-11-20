import React from 'react';
import Note from './note.js';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      noteArray: [],
      currentNoteIndex: '',
    }
  }

  addNewNote() {
    let newNoteArray = this.state.noteArray
    newNoteArray.push({title: 'Insert Title Here', value: ''})
    let newNoteIndex = newNoteArray.length - 1

    this.setState({
      noteArray: newNoteArray,
      currentNoteIndex: newNoteIndex,
    })
  }

  handleTitleChange(e) {
    const { currentNoteIndex, noteArray } = this.state
    let note = {...noteArray[currentNoteIndex], title: e.target.value}
    noteArray[currentNoteIndex] = note

    this.setState({
      noteArray: noteArray
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>Daniel's NoteTaking App</h1>
          <button onClick={() => this.addNewNote()}>Add New Note</button>
        </div>
        <div>
          <Note
            currentNote = {this.state.noteArray[this.state.currentNoteIndex]}
            handleTitleChange = {(e) => this.handleTitleChange(e)}
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
