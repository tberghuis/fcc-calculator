import {
    combineReducers
} from 'redux'

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
            if (state.inputDisplay == "0") {
                state.inputDisplay = ""+action.digit;
            } else {
                state.inputDisplay += ""+action.digit;
            }
            // state.inputDisplay += action.digit;
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
            if (state.inputDisplay !== "") {
                state.calculation += state.lastOperator + state.inputDisplay;
            }
            state.lastOperator = "";

            // try{
                // put eval here??
            // }

            state.inputDisplay = ""+eval(state.calculation);
            return state;
        case 'OPERATOR_PRESS':
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
        default:
            return state;
    }
};

const calculatorApp = combineReducers({
    calculator
})

export default calculatorApp;