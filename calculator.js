/**
 * Calculator - Dynamic Calculation for Addition and Subtraction
 * 
 * A simple calculator that performs addition and subtraction operations
 * with dynamic calculation capabilities. Tracks operation history for
 * auditing and debugging purposes.
 * 
 * @example
 * const calc = new Calculator();
 * calc.add(10, 5);           // Returns 15
 * calc.subtract(20, 8);      // Returns 12
 * calc.getResult();          // Returns 12
 * calc.getHistory();         // Returns array of operations
 */

class Calculator {
  constructor() {
    this.result = 0;
    this.operationHistory = [];
  }

  /**
   * Add two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Sum of a and b
   * @throws {Error} If operands are not valid numbers
   */
  add(a, b) {
    this._validateOperands(a, b);
    this.result = a + b;
    this.operationHistory.push({
      operation: 'add',
      operands: [a, b],
      result: this.result,
      timestamp: new Date()
    });
    return this.result;
  }

  /**
   * Subtract two numbers
   * @param {number} a - First number
   * @param {number} b - Second number (to be subtracted)
   * @returns {number} Difference of a and b
   * @throws {Error} If operands are not valid numbers
   */
  subtract(a, b) {
    this._validateOperands(a, b);
    this.result = a - b;
    this.operationHistory.push({
      operation: 'subtract',
      operands: [a, b],
      result: this.result,
      timestamp: new Date()
    });
    return this.result;
  }

  /**
   * Validate that operands are valid numbers
   * @private
   * @param {*} a - First operand
   * @param {*} b - Second operand
   * @throws {Error} If operands are not valid numbers
   */
  _validateOperands(a, b) {
    if (typeof a !== 'number' || isNaN(a) || !isFinite(a)) {
      throw new Error(`Invalid operand: ${a} is not a valid number`);
    }
    if (typeof b !== 'number' || isNaN(b) || !isFinite(b)) {
      throw new Error(`Invalid operand: ${b} is not a valid number`);
    }
  }

  /**
   * Get the last result
   * @returns {number} The last calculated result
   */
  getResult() {
    return this.result;
  }

  /**
   * Get operation history
   * @returns {Array} Array of all operations performed
   */
  getHistory() {
    return this.operationHistory;
  }

  /**
   * Clear history and reset result
   */
  clear() {
    this.result = 0;
    this.operationHistory = [];
  }

  /**
   * Print operation history to console
   */
  printHistory() {
    console.log('=== Calculator Operation History ===');
    if (this.operationHistory.length === 0) {
      console.log('No operations performed yet');
      return;
    }
    this.operationHistory.forEach((record, index) => {
      const date = record.timestamp.toLocaleTimeString();
      console.log(`${index + 1}. [${date}] ${record.operation}(${record.operands[0]}, ${record.operands[1]}) = ${record.result}`);
    });
    console.log('=====================================');
  }
}

module.exports = Calculator;
