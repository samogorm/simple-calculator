import React, { Component } from 'react';
import './Calculator.css';

// Components
import Key from './../key/Key';

// Constants
import {CalculatorKeys} from './../../constants/CalculatorKeys';
import {isMathematicalOperator, willPerformCalculation, willClearAllCharacters, willClearLastCharacter} from './../../constants/KeyFunctions';

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            calculation: '',
            result: 0
        }

        this._mapCalculatorKeysToComponent = this._mapCalculatorKeysToComponent.bind(this);
        this._captureKeyValue = this._captureKeyValue.bind(this);
        this._doCalculation = this._doCalculation.bind(this);
        this._clearEverything = this._clearEverything.bind(this);
        this._removeLastCharFromCalculation = this._removeLastCharFromCalculation.bind(this);
    }

    render() {
        return(
            <div className="calculator-body">
                <div className="calculator-output">
                    <div className="calculation">
                        <span>{this.state.calculation}</span>
                    </div>
                    <div className="calculation-result">
                        <h3>{this.state.result}</h3>
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
        if (willClearAllCharacters(value)) return this._clearEverything();
        if (willClearLastCharacter(value)) return this._removeLastCharFromCalculation();

        if (willPerformCalculation(value)) this._doCalculation();

        let shouldAddSpace = isMathematicalOperator(value) || willPerformCalculation(value);
        this.setState({calculation: shouldAddSpace ? this.state.calculation + " " + value + " " : this.state.calculation + value});
    }

    /**
     * This will parse the calculation and execute it.
     */
    _doCalculation = () => {
        const result = eval(this.state.calculation);
        this.setState({ result: result})
    }

    /**
     * Clears the component state.
     */
    _clearEverything = () => {
        this.setState({calculation: '', result: 0});
    }

    /**
     * Removes last character from the calculation.
     */
    _removeLastCharFromCalculation = () => {
        const calculation = this.state.calculation;
        this.setState({calculation: calculation.substring(0, calculation.length - 1)});
    }

}

export default Calculator;