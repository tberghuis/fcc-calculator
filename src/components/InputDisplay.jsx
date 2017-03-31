import React, { Component } from 'react';


class InputDisplay extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="input-display">
                {this.props.inputDisplay}
            </div>
        );
    }

};

export default InputDisplay;
