/**
 * @function calculatePercentage
 * @param {number} total - the target value for the project (goal) 
 * @param {number} value - the value donated 
 * @returns {number}
 */

export default function calculatePercentage(total, value) {
    return Math.round((value / total) * 100);
};