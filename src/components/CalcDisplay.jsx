import React, { Component } from 'react';
import { connect } from 'react-redux';

class CalcDisplay extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="calc-display">
                {this.props.calcDisplay}
            </div>
        );
    }

};

//export default CalcDisplay;



const mapStateToProps = (state) => ({
  calcDisplay: state.calcDisplay
});

CalcDisplay = connect(
  mapStateToProps
)(CalcDisplay);

export default CalcDisplay;