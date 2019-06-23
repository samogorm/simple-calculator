import React, { Component } from 'react';
import './Calculator.css';

// Components
import Key from './../key/Key';

// Constants
import {CalculatorKeys} from './../../constants/CalculatorKeys';
import {isMathematicalOperator} from './../../constants/KeyFunctions';

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            calculation: '',
            result: null
        }

        this._mapCalculatorKeysToComponent = this._mapCalculatorKeysToComponent.bind(this);
        this._captureKeyValue = this._captureKeyValue.bind(this);
    }

    // For testing only.
    componentDidUpdate() {
        console.log("Component State: ", this.state.calculation);
    }

    render() {
        return(
            <div className="calculator-body">
                <div className="calculator-output">
                    <div className="calculation">
                        <span>{this.state.calculation}</span>
                    </div>
                    <div className="calculation-result">
                        <h3>21</h3>
                    </div>
                </div>
                <div className="calculator-keypad">
                    {this._mapCalculatorKeysToComponent()}
                </div>
            </div>
        )
    }

    /**
     * This will map a static array of objects that contain
     * the data for our Key component.
     */
    _mapCalculatorKeysToComponent = () => {
        return CalculatorKeys.map(key => {
            return(
                <Key 
                    key={key.id} 
                    label={key.label} 
                    value={key.value} 
                    icon={key.icon} 
                    colour={key.colour}
                    captureKeyValue={this._captureKeyValue}
                />
            )
        });
    }

    /**
     * This will capture the selected key value.
     * 
     * @var {Any} value The value that is being pulled from the child component.
     */
    _captureKeyValue = (value) => {
        let isOperator = isMathematicalOperator(value);
        this.setState({ calculation: isOperator ? this.state.calculation + " " + value + " " : this.state.calculation + value });
    }

    _makeCalculation = () => {
        // TODO: escape the state calculation

        // TODO: return result
    }

}

export default Calculator;