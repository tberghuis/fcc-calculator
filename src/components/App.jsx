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
                {/* pass down all props
                    or instead of sending them down do the whole connect thing again
                 */}
                <CalcButtons />
            </div>
        );
    }

};

export default App;
