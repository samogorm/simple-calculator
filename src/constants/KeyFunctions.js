/**
 * An object that contains the available key functions.
 */
const keyFunctions = {
    mathematicalOperators: ['/', '*', '-', '+'],
    clearAllCharacters: 'AC',
    clearLastCharacter: 'del',
    doCalculation: '=',
    doPercentage: '%'
}

/**
 * This will check if the given value is a mathematical operator.
 * 
 * @var {Any} value The value to check.
 * @return {Bool} true/false
 */
const isMathematicalOperator = (value) => {
    return keyFunctions.mathematicalOperators.includes(value) ? true : false;
}

/**
 * This will check if the given value will clear all characters.
 *
 * @var {Any} value The value to check.
 * @return {Bool} true/false
 */
const willClearAllCharacters = (value) => {
    return value === keyFunctions.clearAllCharacters ? true : false;
}

/**
 * This will check if the given value will clear the last character.
 *
 * @var {Any} value The value to check.
 * @return {Bool} true/false
 */
const willClearLastCharacter = (value) => {
    return value === keyFunctions.clearLastCharacter ? true : false;
}

/**
 * This will check if the given value is the one that performs
 * a calculation.
 *
 * @var {Any} value The value to check.
 * @return {Bool} true/false
 */
const willPerformCalculation = (value) => {
    return value === keyFunctions.doCalculation ? true : false;
}

/**
 * This will check if the given value is the one that performs
 * a percentage.
 *
 * @var {Any} value The value to check.
 * @return {Bool} true/false
 */
const isPercentage = (value) => {
    return value === keyFunctions.doPercentage ? true : false;
}

// Exports
 module.exports.isMathematicalOperator = isMathematicalOperator;
 module.exports.willClearAllCharacters = willClearAllCharacters;
 module.exports.willClearLastCharacter = willClearLastCharacter;
 module.exports.willPerformCalculation = willPerformCalculation;
 module.exports.isPercentage = isPercentage;