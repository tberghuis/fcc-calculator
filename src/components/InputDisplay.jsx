import React, { Component } from 'react';

import { connect } from 'react-redux';


class InputDisplay extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="input-display">
                <input type="text"
                    value={this.props.inputDisplay}
                />

            </div>
        );
    }

};


// const VisibleTodoList = withRouter(connect(
//   mapStateToProps,
//   { onTodoClick: toggleTodo }
// )(TodoList));

// const mapStateToProps = (state, { params }) => ({
//   todos: getVisibleTodos(state, params.filter || 'all'),
// });

const mapStateToProps = (state) => ({
    inputDisplay: state.inputDisplay
});

InputDisplay = connect(
    mapStateToProps
)(InputDisplay);

export default InputDisplay;
