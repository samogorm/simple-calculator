import React, { Component } from 'react';
import './Calculator.css';

// Components
import Key from './../key/Key';

// Constants
import {CalculatorKeys} from './../../constants/CalculatorKeys';
import {isMathematicalOperator, willPerformCalculation, willClearAllCharacters, willClearLastCharacter, isPercentage, willClearLastWholeEntry} from './../../constants/KeyFunctions';

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
        this._clearLastWholeEntry = this._clearLastWholeEntry.bind(this);
        this._removeLastCharFromCalculation = this._removeLastCharFromCalculation.bind(this);
        this._checkIfLastValueIsAMathOperator = this._checkIfLastValueIsAMathOperator.bind(this);
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
        // TODO: maybe change this to a switch statement.
        if (willClearAllCharacters(value)) return this._clearEverything();
        if (willClearLastWholeEntry(value)) return this._clearLastWholeEntry();
        if (willClearLastCharacter(value)) return this._removeLastCharFromCalculation();
        if (willPerformCalculation(value)) return this._doCalculation();

        if (this._checkIfLastValueIsAMathOperator(value) === false) {
            let shouldAddSpace = isMathematicalOperator(value) || willPerformCalculation(value);
            let outputValue = isPercentage(value) ? ' / 100' : value;

            this.setState({calculation: shouldAddSpace ? this.state.calculation + ' ' + outputValue + ' ' : this.state.calculation + outputValue});
        }
    }

    /**
     * This will parse the calculation and execute it.
     */
    _doCalculation = () => {
        if(this.state.calculation !== '') {
            let calculation = this.state.calculation;
            let splitCalculation = calculation.split(" ");
            let removeBlankEntries = splitCalculation.filter(arrValue => arrValue !== '');
            let lastEntry = removeBlankEntries[removeBlankEntries.length - 1];

            if (isMathematicalOperator(lastEntry)) {
                removeBlankEntries.pop(lastEntry);
                calculation = removeBlankEntries.join(" ");
            }

            const result = eval(calculation);
            this.setState({ result: result.toFixed(2)});
        }
    }

    /**
     * Clears the component state.
     */
    _clearEverything = () => {
        this.setState({calculation: '', result: 0});
    }

    /**
     * Clears the last whole entry from the calculation state.
     */
    _clearLastWholeEntry = () => {
        const calculation = this.state.calculation;
        let splitCalculation = calculation.split(" ");
        let lastWholeEntry = splitCalculation[splitCalculation.length - 1];

        this.setState({calculation: calculation.substring(0, calculation.length - lastWholeEntry.length)});
    }

    /**
     * Removes last character from the calculation.
     */
    _removeLastCharFromCalculation = () => {
        const calculation = this.state.calculation;
        this.setState({calculation: calculation.substring(0, calculation.length - 1)});
    }

    /**
     * This will check if the last entered value of a calculation is a key function as we
     * don't want the user to enter things such as (45 ++ - 4);
     */
    _checkIfLastValueIsAMathOperator = (value) => {
        const calculation = this.state.calculation;
        let splitCalculation = calculation.split(" ");
        let removeBlankEntries = splitCalculation.filter(arrValue => arrValue !== '');

        let lastEntry = removeBlankEntries[removeBlankEntries.length - 1];

        let isLastEntryMathOp = isMathematicalOperator(lastEntry) ? true : false;
        let isCurrValueMathOp = isMathematicalOperator(value) ? true : false;

        return isLastEntryMathOp === true && isCurrValueMathOp === true ? true : false;
    }

}

export default Calculator;