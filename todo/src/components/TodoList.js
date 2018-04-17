import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{this.props.todos.map(todo => {
					return <Todo todo={todo} />;
				})}
			</div>
		);
	}
}
