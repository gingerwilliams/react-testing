import React, { Fragment, Component } from 'react';

class AddForm extends Component {
    state = {
        task: '',
        todo: ["clean my room"],
    }

    handleChange = (event) => {
        this.state.task = event.currentTarget.value

        const task = event.currentTarget.value;

        this.setState({
            task: task
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //clone the original todo
        const todo = [...this.state.todo];

        todo.push(this.state.task);

        this.setState({
            todo: todo,
            task: ''
        });
    }

    render() {
        const { task, todo } = this.state;

        return (
            <Fragment>
                <ul>
                    {
                        todo.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
                <form onSubmit={this.handleSubmit}>
                    {/* controlled input */}
                    <input
                        type="input"
                        placeholder="add task"
                        name="task"
                        value={task}
                        onChange={this.handleChange}
                    />
                    <button
                        type="sumbit"
                        placeholder="add to list"
                    >
                        add
                    </button>
                </form>
            </Fragment>
        );
    }
}

export default AddForm;