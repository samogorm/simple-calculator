import React, {Component} from 'react';
import './Key.css';

class Key extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null
        }

        this._captureAndStoreValue = this._captureAndStoreValue.bind(this);
    }

    render() {
        return(
            <button onClick={(event) => this._captureAndStoreValue(event.target)} className={`key key--${this.props.colour}`} data-value={this.props.value}>
                {this.props.label}
            </button>
        );
    }

    /**
     * This will capture and store the key value in the state when
     * the key is pressed/clicked.
     * 
     * @var {Object} target The target element.
     */
    _captureAndStoreValue = (target) => {
        console.log("This button was pressed: ", target.getAttribute('data-value'));
    }
}

export default Key;