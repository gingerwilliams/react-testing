import React, { Fragment, Component } from 'react';

class AddForm extends Component {
    state = {
        name: '',
        tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    }

    handleChange = (event) => {
        this.state.name = event.currentTarget.value

        const name = event.currentTarget.value;

        this.setState({
            name: name
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //clone the original tasks
        const tasks = [...this.state.tasks];

        tasks.push(this.state.name);

        this.setState({
            tasks: tasks,
            name: ''
        });
        this.setLocalStorage(this.state.tasks);
    }

    setLocalStorage = (tasks) => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    clearLocalStorage = () => {
        localStorage.clear();
        this.setState({
            tasks: []
        });
    }

    render() {
        const { name, tasks } = this.state;

        return (
            <Fragment>
                <ul>
                    {
                        tasks.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
                <form onSubmit={this.handleSubmit}>
                    {/* controlled input */}
                    <input
                        type="input"
                        placeholder="add a new task"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                    <button
                        type="sumbit"
                    >
                        add
                    </button>
                    <button
                        type="reset"
                        onClick={this.clearLocalStorage}
                    >
                        clear
                    </button>
                </form>
            </Fragment>
        );
    }
}

export default AddForm;