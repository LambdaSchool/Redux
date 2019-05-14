import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';
import './AddTodo.css';

class AddTodo extends React.Component {
  state = {
    newTodo: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: '' });
  };

  handleChange = e => {
    this.setState({ newTodo: e.target.value });
  };

  render() {
    return (
      <>
        <form className="AddTodo" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="What do you need to do today?"
            value={this.state.newTodo}
            onChange={this.handleChange}
          />
          <input type="submit" value="✚" />
        </form>
      </>
    );
  }
}

// const mapStateToProps = state => ({
//   todos: state.todos,
// });

export default connect(
  null,
  { addTodo }
)(AddTodo);

// export default connect()(AddTodo);
