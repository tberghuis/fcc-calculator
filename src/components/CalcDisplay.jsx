import React, { Component } from 'react';
import { connect } from 'react-redux';

class CalcDisplay extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="calc-display">
                {this.props.calculation + this.props.lastOperator}
            </div>
        );
    }

};

const mapStateToProps = (state) => ({
    calculation: state.calculator.calculation,
    lastOperator: state.calculator.lastOperator
});

CalcDisplay = connect(
    mapStateToProps
)(CalcDisplay);

export default CalcDisplay;