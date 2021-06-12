import { getOperationMembersCount, parseValue } from './helpers';

export function calcOPZ(inputString, xValue) {
  let stack = [];

  inputString.split(' ').forEach((item) => {
    const parse = parseValue(item);
    if (!Number.isNaN(parse)) {
      // это число
      stack.push(parse);
    } else if (item === 'x') {
      stack.push(xValue);
    } else {
      // это оператор
      const operationMembersCount = getOperationMembersCount(item);
      if (stack.length < operationMembersCount) {
        throw Error('Недостаточно чисел для операции');
      }
      const a = stack[stack.length - 1];
      const b = operationMembersCount > 1 ? stack[stack.length - 2] : null;
      let result;

      switch (item) {
        case '*':
          result = b * a;
          break;
        case '/':
          result = b / a;
          break;
        case '+':
          result = b + a;
          break;
        case '-':
          result = b - a;
          break;
        case '^':
          result = Math.pow(b, a);
          break;
        case 'tan':
          result = Math.tan(a);
          break;
        case 'sin':
          result = Math.sin(a);
          break;
        case 'cos':
          result = Math.cos(a);
          break;
      }

      stack.splice(-1 * operationMembersCount, operationMembersCount, result);
    }
  });

  return stack[0];
}
