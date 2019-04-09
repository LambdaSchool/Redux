import React from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "../actions";

class TodoList extends React.Component {
  state = {
    newTodo: ""
  };

  handleChanges = e => {
    this.setState({
      newTodo: e.target.value
    });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  };

  toggleTodo = id => {
    this.props.toggleTodo(id);
  };

  render() {
    return (
      <>
        <h2>Todo App</h2>
        <input
          type="text"
          value={this.state.newTodo}
          placeholder="...add a new todo"
          onChange={this.handleChanges}
        />
        <button onClick={this.addTodo}>Add Todo</button>
        <button onClick={this.filterTodo}>Clear</button>
        <div className="">
          {this.props.todos &&
            this.props.todos.map(todo => (
              <h3 key={todo.id} onClick={() => this.toggleTodo(todo.id)}>
                {todo.task}
                {todo.completed && <i className="fa fa-check" />}
              </h3>
            ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo }
)(TodoList);
