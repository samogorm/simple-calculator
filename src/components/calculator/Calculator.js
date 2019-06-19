import React, { Component } from 'react';
import './Calculator.css';

// Components
import Key from './../key/Key';

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            calculation: null,
            result: null
        }
    }

    render() {
        return(
            <div className="calculator-body">
                <div className="calculator-output">
                    <div className="calculation">
                        <span>1 + 50 - 30 =</span>
                    </div>
                    <div className="calculation-result">
                        <h3>21</h3>
                    </div>
                </div>
                <div className="calculator-keypad">
                    {/* AC */}
                    <Key label="AC" value="AC" colour="plum--dark"/>

                    {/* C */}
                    <button className="key key--plum--medium">
                        <span>C</span>
                    </button>

                    {/* % */}
                    <button className="key key--plum--medium">
                        <span>%</span>
                    </button>

                    {/* / */}
                    <button className="key key--lilac">
                        <span>/</span>
                    </button>

                    {/* 7 */}
                    <button className="key key--plum--light">
                        <span>7</span>
                    </button>

                    {/* 8 */}
                    <button className="key key--plum--light">
                        <span>8</span>
                    </button>

                    {/* 9 */}
                    <button className="key key--plum--light">
                        <span>9</span>
                    </button>

                    {/* X */}
                    <button className="key key--lilac">
                        <span>X</span>
                    </button>

                    {/* 4 */}
                    <button className="key key--plum--light">
                        <span>4</span>
                    </button>

                    {/* 5 */}
                    <button className="key key--plum--light">
                        <span>5</span>
                    </button>

                    {/* 6 */}
                    <button className="key key--plum--light">
                        <span>6</span>
                    </button>

                    {/* - */}
                    <button className="key key--lilac">
                        <span> - </span>
                    </button>

                    {/* 1 */}
                    <button className="key key--plum--light">
                        <span>1</span>
                    </button>

                    {/* 2 */}
                    <button className="key key--plum--light">
                        <span>2</span>
                    </button>

                    {/* 3 */}
                    <button className="key key--plum--light">
                        <span>3</span>
                    </button>

                    {/* + */}
                    <button className="key key--lilac">
                        <span>+</span>
                    </button>

                    {/* 0 */}
                    <button className="key key--plum--light">
                        <span>0</span>
                    </button>

                    {/* . */}
                    <button className="key key--plum--medium">
                        <span>.</span>
                    </button>

                    {/* del */}
                    <button className="key key--plum--medium">
                        <span>del</span>
                    </button>

                    {/* = */}
                    <button className="key key--lilac">
                        <span> = </span>
                    </button>

                </div>
            </div>
        )
    }
}

export default Calculator;