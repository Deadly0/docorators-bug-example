import React, { Component } from 'react';
import { connect } from 'react-redux';


export default
@connect(null, {})
class App extends Component {
	getTasks() {
		return [
			{ _id: 1, text: 'This is task 1' },
			{ _id: 2, text: 'This is task 2' },
			{ _id: 3, text: 'This is task 3' },
		];
	}

	renderTasks() {
		return this.getTasks().map((task) => (
			<div key={task._id}>{task.text}</div>
		));
	}

	render() {
		return (
			<div className="container">
				<header>
					<h1>Todo List</h1>
				</header>

				<ul>
					{this.renderTasks()}
				</ul>
			</div>
		);
	}
}
