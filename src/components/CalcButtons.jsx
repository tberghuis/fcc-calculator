import React, { Component } from 'react';


class CalcButtons extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="calc-buttons">
                <button>AC</button>
                <button>CE</button>
                <button>&divide;</button>
                <button>&times;</button>
                <br/>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>-</button>
                <br/>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>+</button>
                <br/>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <br/>
                <button class="zero">0</button>
                <button>.</button>
                <button class="equals">=</button>
            </div>
        );
    }

};

export default CalcButtons;
