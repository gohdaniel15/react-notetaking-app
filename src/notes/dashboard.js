import React from 'react';
import Note from './note.js';
import Sidebar from './sidebar.js';

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

  selectNote(index) {
    let newNoteIndex = index

    this.setState({
      currentNoteIndex: newNoteIndex
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
          <Sidebar
            noteArray = {this.state.noteArray}
            currentNote = {this.state.noteArray[this.state.currentNoteIndex]}
            selectNote = {(e) => this.selectNote(e)}
          />
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
