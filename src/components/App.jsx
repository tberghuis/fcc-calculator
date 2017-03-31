import React, { Component } from 'react';


class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="app">
                <h1>FCC Calculator</h1>
                {this.props.children}
            </div>
        );
    }

};

export default App;
