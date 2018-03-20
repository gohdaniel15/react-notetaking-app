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

  componentDidMount() {
    fetch('http://localhost:3001/notes')
      .then(response => response.json())
      .then(data => {
        this.setState({
          noteArray: data,
          currentNoteIndex: 0
        })
      })
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

  sync(e) {
    e.preventDefault();
    fetch('http://localhost:3001/notes/sync', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "sync": this.state.noteArray })
    }).then((response) => {
      response.json()
    }).then((response) => this.componentDidMount())
  }

  handleTitleChange(e) {
    const { currentNoteIndex, noteArray } = this.state
    let note = {...noteArray[currentNoteIndex], title: e.target.value}
    noteArray[currentNoteIndex] = note

    this.setState({
      noteArray: noteArray
    })
  }

  handleValueChange(e) {
    const { currentNoteIndex, noteArray } = this.state
    let note = {...noteArray[currentNoteIndex], value: e.target.value}
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
        <div className='container'>
          <div className='row text-center'>
            <h1 className='col-xs-12'>Daniels NoteTaking App</h1>
            <button onClick={() => this.addNewNote()} className='btn btn-primary col-md-6 col-md-offset-3'>Add New Note</button>
            <button onClick={(e) => this.sync(e)} className='btn btn-success col-md-6 col-md-offset-3'>Sync</button>
          </div>
          <hr />
          <div className='row'>
            <div className='col-md-3'>
              <Sidebar
                noteArray = {this.state.noteArray}
                currentNote = {this.state.noteArray[0]}
                selectNote = {(e) => this.selectNote(e)}
              />
            </div>
            <div className='col-md-9'>
              <Note
                currentNote = {this.state.noteArray[this.state.currentNoteIndex]}
                handleTitleChange = {(e) => this.handleTitleChange(e)}
                handleValueChange = {(e) => this.handleValueChange(e)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
