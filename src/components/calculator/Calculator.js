import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            calculation: null
        }
    }

    render() {
        return(
            <div className="Calculator-body">
                <div className="Calculator-output">
                    <div className="calculation">
                        <span>1 + 50 - 30 =</span>
                    </div>
                    <div className="calculation-result">
                        <h3>21</h3>
                    </div>
                </div>
                <div className="Calculator-keypad">

                </div>
            </div>
        )
    }
}

export default Calculator;