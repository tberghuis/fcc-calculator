export const digitPress = (digit) => ({
    type: 'DIGIT_PRESS',
    digit,
});


export const periodPress = () => ({
    type: 'PERIOD_PRESS'
});

export const operatorPress = (operand, operator) => {

    // getting from store is antipattern???
    // in action creator

    //let operand = '45345';

    //if(operand)

    return {
        type: 'OPERATOR_PRESS',
        operator,
        operand
    };
};


export const clearEntry = () => ({
    type: 'CLEAR_ENTRY'
});

export const clearAll = () => ({
    type: 'CLEAR_ALL'
});

export const equalsPress = (calculation) => ({
    type: 'EQUALS_PRESS',
    calculation
});


