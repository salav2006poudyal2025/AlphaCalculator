/**
 * Calculator - Addition Logic
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
   */
  add(a, b) {
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
   */
  subtract(a, b) {
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
}

module.exports = Calculator;
