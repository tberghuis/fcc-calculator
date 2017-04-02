import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/index.js';

class CalcButtons extends Component {

    constructor(props) {
        super(props);
    }

    digitPress = (digit) => {
        console.log("press", digit);
        this.props.dispatch(actions.digitPress(digit));
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
                    onClick={() => dispatch(actions.operatorPress('/'))}
                >&divide;</button>
                <button
                    onClick={() => dispatch(actions.operatorPress('*'))}
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
                    onClick={() => dispatch(actions.operatorPress('-'))}
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
                    onClick={() => dispatch(actions.operatorPress('+'))}
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
                    onClick={() => dispatch(actions.periodPress())}
                >.</button>
                <button class="equals"
                    onClick={() => dispatch(actions.equalsPress())}
                >=</button>
            </div >
        );
    }

};

CalcButtons.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect()(CalcButtons);
