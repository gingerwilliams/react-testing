import React, { Fragment, Component } from 'react';
import List from './List';
import AddForm from './AddForm';
import DataManager from './DataManager';

class App extends Component {

    dataManager = new DataManager();

    render() {
        return (
            <Fragment>
                <h3>Do some shit</h3>
                {/* <List tasks={this.state.tasks} /> */}
                <List tasks={this.dataManager.getTasks()} />
                <AddForm dataManager={this.dataManager} />
            </Fragment>
        )
    }

}

export default App;