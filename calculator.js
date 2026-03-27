/**
 * Calculator - Addition Logic
 */

class Calculator {
  constructor() {
    this.result = 0;
  }

  /**
   * Add two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Sum of a and b
   */
  add(a, b) {
    this.result = a + b;
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
    return this.result;
  }

  /**
   * Get the last result
   * @returns {number} The last calculated result
   */
  getResult() {
    return this.result;
  }
}

module.exports = Calculator;
