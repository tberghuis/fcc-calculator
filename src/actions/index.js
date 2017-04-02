export const digitPress = (digit) => ({
    type: 'DIGIT_PRESS',
    digit,
});


export const periodPress = () => ({
    type: 'PERIOD_PRESS'
});

export const operatorPress = (operator) => ({
    type: 'OPERATOR_PRESS',
    operator
});


export const clearEntry = () => ({
    type: 'CLEAR_ENTRY'
});

export const clearAll = () => ({
    type: 'CLEAR_ALL'
});

export const equalsPress = () => ({
    type: 'EQUALS_PRESS'
});