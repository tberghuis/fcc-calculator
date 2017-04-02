import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

//import { digitPress } from '../actions/index.js';

import * as actions from '../actions/index.js';


class CalcButtons extends Component {

    constructor(props) {
        super(props);
    }



    digitPress = (digit) => {

        if (this.props.calcDisplay.indexOf("=") > -1) {
            this.props.dispatch(actions.clearAll());
        }



        // dispatch
        this.props.dispatch(actions.digitPress(digit));

    }


    periodPress = () => {

        if (this.props.calcDisplay.indexOf("=") > -1) {
            this.props.dispatch(actions.clearAll());
        }



        // dispatch
        this.props.dispatch(actions.periodPress());

    }

    operatorPress = (operator) => {
        this.props.dispatch(actions.operatorPress(this.props.operand, operator));

        this.props.dispatch(actions.clearEntry());
    }


    equalsPress = () => {

        let calculation = this.props.calcDisplay + this.props.operand;

        // eval()

        try {
            if (!eval(calculation)) {
                return;
            }
            this.props.dispatch(actions.equalsPress(calculation));
        } catch (e) {
            alert("Please Clear All (CA) and try again.");
        }




        //this.props.dispatch(actions.clearEntry());
    }


    render() {

        let dispatch = this.props.dispatch;

        return (
            <div class="calc-buttons">
                <button
                    onClick={() => dispatch(actions.clearAll())}
                >AC</button>
                <button
                    onClick={() => dispatch(actions.clearEntry())}
                >CE</button>
                <button
                    onClick={() => this.operatorPress('/')}
                >&divide;</button>
                <button
                    onClick={() => this.operatorPress('*')}
                >&times;</button>
                <br />
                <button
                    onClick={() => this.digitPress(7)}
                >7</button>
                <button
                    onClick={() => this.digitPress(8)}
                >8</button>
                <button
                    onClick={() => this.digitPress(9)}
                >9</button>
                <button
                    onClick={() => this.operatorPress('-')}
                >-</button>
                <br />
                <button
                    onClick={() => this.digitPress(4)}
                >4</button>
                <button
                    onClick={() => this.digitPress(5)}
                >5</button>
                <button
                    onClick={() => this.digitPress(6)}
                >6</button>
                <button
                    onClick={() => this.operatorPress('+')}
                >+</button>
                <br />
                <button
                    onClick={() => this.digitPress(1)}
                >1</button>
                <button
                    onClick={() => this.digitPress(2)}
                >2</button>
                <button
                    onClick={() => this.digitPress(3)}
                >3</button>
                <br />
                <button
                    class="zero"
                    onClick={() => this.digitPress(0)}
                >0</button>
                <button
                    onClick={this.periodPress}
                >.</button>
                <button class="equals"
                    onClick={this.equalsPress}
                >=</button>
            </div >
        );
    }

};

CalcButtons.propTypes = {
    dispatch: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
    //console.log(state); // state
    //console.log(ownProps); // ownProps

    operand: state.inputDisplay,
    calcDisplay: state.calcDisplay
});


//export default CalcButtons;//
export default connect(mapStateToProps)(CalcButtons);

// onClick={('7') => {this.digitPress(7)}