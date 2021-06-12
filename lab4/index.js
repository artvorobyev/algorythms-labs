import { calcOPZ } from './src/calc';
import { parseValue } from './src/helpers';

const prompt = require('prompt-sync')();

console.log('Введите ОПЗ:\n');
const inputString = prompt();

if (inputString.includes('x')) {
  console.log('Введите минимальное значение X:\n');
  const min = parseValue(prompt());

  if (isNaN(min)) {
    throw Error('Вы ввели не числовое значение');
  }

  console.log('Введите максимальное значение X:\n');
  const max = parseValue(prompt());

  if (isNaN(max)) {
    throw Error('Вы ввели не числовое значение');
  }

  if (min >= max) {
    throw Error('Минимальное значение не может быть больше максимального');
  }

  console.log('Введите шаг:\n');
  const step = parseValue(prompt());

  if (isNaN(step)) {
    throw Error('Вы ввели не числовое значение');
  }

  if (!step) {
    throw Error('Шаг не может быть нулевым');
  }

  let result = [];
  result.push(['x', 'f(x)']);

  for (let i = min; i <= max; i += step) {
    result.push([i, calcOPZ(inputString, i)]);
  }

  if ((max - min) % step) {
    result.push([max, calcOPZ(inputString, max)]);
  }
  console.table(result);
} else {
  const result = calcOPZ(inputString);

  console.log(result);
}
