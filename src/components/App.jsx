import React, { Fragment, Component } from 'react';
import AddForm from './AddForm';

class App extends Component {

    // componentDidMount() {
    //     fetch('https://api.myjson.com/bins/15psn9')
    //         .then(result => result.json())
    //         .then(rowData => this.setState({todo : rowData}))
    // }

    render() {
        return (
            <Fragment>
                <h1>My todo list</h1>
                <AddForm />
            </Fragment>
        )
    }

}

export default App;