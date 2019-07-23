import React, { Fragment, Component } from 'react';



class AddForm extends Component {
    state = {
        name: '',
        // tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    }

    handleChange = (event) => {
        const name = event.currentTarget.value;

        this.setState({
            name: name
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { dataManager } = this.props;

        dataManager.addTasks(this.state.name);

    }

    render() {
        const { name } = this.state;


        return (
            <Fragment>

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
                        data-testid="submit"
                        type="sumbit"
                    >
                        add
                    </button>

                </form>
            </Fragment>
        );
    }
}

export default AddForm;