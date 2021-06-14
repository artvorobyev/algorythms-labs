const { parseValue } = require('../lab4/src/helpers');

const prompt = require('prompt-sync')();

console.log('Введите выражение:\n');
const inputString = prompt();

let outputString = [];
let stack = [];

function checkOperator(item) {
  // console.log('ITEM', item);
  if (item === '(') {
    stack.push(item);
  } else if (item === ')') {
    for (let i = stack.length - 1; i >= 0; i--) {
      let operator = stack.pop();
      if (operator !== '(') {
        outputString.push(operator);
      }
    }
  } else if (!stack.length || stack[stack.length - 1] === '(') {
    stack.push(item);
  } else if (
    getOperationPriority(stack[stack.length - 1]) < getOperationPriority(item)
  ) {
    stack.push(item);
  } else {
    outputString.push(stack[stack.length - 1]);
    stack.pop();
    checkOperator(item);
  }
  // console.log('STACK', stack);
}

inputString.split(' ').forEach((item) => {
  const parse = parseValue(item);
  if (!Number.isNaN(parse)) {
    // это число
    outputString.push(parse);
  } else if (item === 'x') {
    outputString.push(item);
  } else {
    // это оператор
    checkOperator(item);
  }
});
if (stack.length) {
  for (let i = stack.length - 1; i >= 0; i--) {
    outputString.push(stack[i]);
  }
}

console.log(outputString.join(' '));
