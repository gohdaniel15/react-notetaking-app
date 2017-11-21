import React from 'react';

class Sidebar extends React.Component {
  renderTitles(array) {
    if (array.length === 0) {
      return(
        <div>
          No notes yet
        </div>
      )
    } else {
      return array.map((note, index) => {
        const { title, value } = note
        return(
          <li onClick={() => this.props.selectNote(index)} className='list-group-item'>{title}</li>
        )
      })
    }
  }

  render() {
    return(
      <ul className='list-group'>
        {this.renderTitles(this.props.noteArray)}
      </ul>
    )
  }
}

export default Sidebar;
