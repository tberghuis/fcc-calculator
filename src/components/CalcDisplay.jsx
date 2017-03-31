import React, { Component } from 'react';


class CalcDisplay extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="calc-display">
                {this.props.calcDisplay}
            </div>
        );
    }

};

export default CalcDisplay;
