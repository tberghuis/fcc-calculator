import React, { Component } from 'react';
import { connect } from 'react-redux';

class CalcDisplay extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let calc = this.props.calculator;
        let disp;
        if(calc.displayIsAns){
            disp = calc.calculation + "=";
        } else {
            disp = calc.calculation + calc.lastOperator;
        }
        return (
            <div class="calc-display">
                {disp}
            </div>
        );
    }

};

const mapStateToProps = (state) => ({
    // calculation: state.calculator.calculation,
    // lastOperator: state.calculator.lastOperator
    calculator: state.calculator
});

CalcDisplay = connect(
    mapStateToProps
)(CalcDisplay);

export default CalcDisplay;