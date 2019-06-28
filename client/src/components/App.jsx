import React, { Component } from 'react';

class App extends Component {
    state = {
        title: '',
        todo: ["clean my room"],
    }

    // componentDidMount() {
    //     fetch('https://api.myjson.com/bins/15psn9')
    //         .then(result => result.json())
    //         .then(rowData => this.setState({todo : rowData}))
    // }

    handleChange = (event) => {
        console.log(event.currentTarget.value);
        this.state.title = event.currentTarget.value

        const title = event.currentTarget.value;

        this.setState({
            title: title
        })
        console.log(this.state.title);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //clone the original todo
        const todo = [...this.state.todo];

        todo.push(this.state.title);

        this.setState({
            todo: todo,
            title: ''
        });
    }

    render() {
        return (
            <div>
                <h1>My todo list</h1>
                <ul>
                    {
                        this.state.todo.map(item => (
                            <li>{item}</li>
                        ))
                    }
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="input"
                        placeholder="add to list"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <button
                        type="sumbit"
                        placeholder="add to list"
                    >
                        add
                    </button>
                </form>
            </div>
        );
    }
}

export default App;