import React, {Component} from 'react';
import './Key.css';

class Key extends Component {
    constructor(props) {
        super(props);

        this._captureAndStoreValue = this._captureAndStoreValue.bind(this);
        this._renderLabelForKey = this._renderLabelForKey.bind(this);
    }

    render() {
        return(
            <button onClick={(event) => this._captureAndStoreValue(event.target)} className={`key key--${this.props.colour}`} data-value={this.props.value}>
               {this._renderLabelForKey()}
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
        // TODO: Look at disabling event bubbling for when we have icons.
        let value = target.getAttribute('data-value');
        this._passStateValueToParent(value);
    }

    /**
     * This will check if the icon or label is null and render the
     * appropriate label/icon for the button/key.
     */
    _renderLabelForKey = () => {
        return this.props.label !== null ? this.props.label : `<img src="${require('./../../assets/svg/' + this.props.icon + '.svg')}"/>`;
    }

    /**
     * This will pass the state value up one parent level.
     * Given that the prop callback is 'captureKeyValue'.
     * 
     * @var {Any} value The value to be passed up to the parent.
     */
    _passStateValueToParent = (value) => {
        this.props.captureKeyValue(value);
    }
}

export default Key;