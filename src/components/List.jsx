import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {

    listTasks = () => {
        return this.props.tasks.map((item, index) => {
            const key = `task-${index}`;
            return <li data-testid={key} key={key}>{item}</li>
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



// import React from 'React';

// const List = (props) => {


//     return (
//         <ul>
//             {
//                 props.tasks.map((item, index) => (
//                     <li key={index}>{item}</li>
//                 ))
//             }
//         </ul>
//     );
// }

// export default List;