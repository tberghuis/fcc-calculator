import {
    combineReducers
} from 'redux'

// later if gets too big, seperate files


const inputDisplay = (state = "", action) => {
    switch (action.type) {
        case 'DIGIT_PRESS':
            return state + action.digit;
        case 'PERIOD_PRESS':
            if (state.indexOf('.') > -1) {
                return state;
            }
            if (state === "") {
                return "0.";
            }
            return state + ".";
        case 'CLEAR_ENTRY':
            return "";
        case 'CLEAR_ALL':
            return "";
        case 'EQUALS_PRESS':
            return ""+eval(action.calculation);
        default:
            return state;
    }
};


const calcDisplay = (state = "", action) => {
    switch (action.type) {
        case 'OPERATOR_PRESS':
            if(state.indexOf('=')>-1){
                state = "";
            }
            return state + action.operand + action.operator;
        case 'CLEAR_ALL':
            return "";
        case 'EQUALS_PRESS':
            return action.calculation + "=";
        default:
            return state;
    }
};





const calculatorApp = combineReducers({
    inputDisplay,
    calcDisplay
})

export default calculatorApp