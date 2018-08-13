import React, { Component } from 'react'

export default class TodoForm extends Component {
  render() {
    return (
      <div>
        <input
            name="currentText"
            value={this.props.currentText}
            type="text"
            onChange={this.props.handleInputChange}
            placeholder= "Add todo!"
        />
        <button onClick={this.props.addTodo}>Add</button>
      </div>
    )
  }
}
