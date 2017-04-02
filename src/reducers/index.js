import {
    combineReducers
} from 'redux'


// should i use immutable

const resetState = () => {
    const defaultState = {};
    defaultState.inputDisplay = "";
    defaultState.lastOperator = "";
    defaultState.calculation = "";
    defaultState.displayIsAns = false;
    return defaultState;
}


const calculator = (state = resetState(), action) => {
    // since so common
    state = { ...state
    };

    switch (action.type) {
        case 'DIGIT_PRESS':
            if (state.displayIsAns) {
                state = resetState();
            }
            state.inputDisplay += action.digit;
            return state;
        case 'PERIOD_PRESS':
            if (state.inputDisplay.indexOf('.') > -1) {
                return state;
            }
            state.inputDisplay += ".";
            return state;
        case 'CLEAR_ENTRY':
            state.inputDisplay = "";
            return state;
        case 'CLEAR_ALL':
            return resetState();
        case 'EQUALS_PRESS':
            // what are all the do nothing situations
            if (state.displayIsAns || state.calculation === "") {
                return state;
            }

            state.displayIsAns = true;
            // let ans;
            //come back
            if (state.inputDisplay !== "") {

                state.calculation += state.lastOperator + state.inputDisplay;

            }
            state.lastOperator = "";
            state.inputDisplay = eval(state.calculation);
            return state;

            // return "" + eval(action.calculation);
        case 'OPERATOR_PRESS':
            // console.log("here");

            if (state.inputDisplay === "") {
                state.lastOperator = action.operator;
                return state;
            }

            if (state.displayIsAns) {
                state.calculation = state.inputDisplay;
                state.lastOperator = action.operator;
                state.displayIsAns = false;
                state.inputDisplay = "";
                return state;
            }

            state.calculation += state.lastOperator + state.inputDisplay;
            state.inputDisplay = "";
            state.lastOperator = action.operator;

            return state;
            // if (state.indexOf('=') > -1) {
            //     state = "";
            // }
            // // if last char operator overwrite
            // if (action.operand === "" && "/*-+".indexOf(state.slice(-1)) > -1) {
            //     return state.slice(0, state.length - 1) + action.operator;
            // }


            // return state + action.operand + action.operator;
        default:
            return state;
    }
};




const calculatorApp = combineReducers({
    calculator
})

export default calculatorApp