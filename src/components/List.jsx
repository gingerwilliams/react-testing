import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {

    listTasks = () => {

        return this.props.tasks.map((item, index) => {
            const key = `task-${index}`;
            return <li data-testid={key} key={key}><input type="checkbox" />{item.name}</li>
        });
    }

    render() {
        return (<ul>{this.listTasks()}</ul>);
    }
}

List.propTypes = {
    tasks: PropTypes.array
};

export default List;