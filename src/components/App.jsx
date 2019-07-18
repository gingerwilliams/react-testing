import React, { Fragment, Component } from 'react';
import AddForm from './AddForm';
import DataManager from './DataManager';

class App extends Component {

    dataManager = new DataManager();

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