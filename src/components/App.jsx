import React, { Fragment, Component } from 'react';
import AddForm from './AddForm';


class App extends Component {
    render() {
        return (
            <Fragment>
                <h1>My todo list</h1>
                <AddForm dataManager={this.dataManager} />
            </Fragment>
        )
    }

}

export default App;