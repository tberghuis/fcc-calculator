import React, { Component } from 'react';

import InputDisplay from './InputDisplay.jsx';
import CalcDisplay from './CalcDisplay.jsx';
import CalcButtons from './CalcButtons.jsx';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="app">
                <h1>FCC Calculator</h1>
                <InputDisplay />
                <CalcDisplay />
                <CalcButtons />
            </div>
        );
    }

};

export default App;
