export function getOperationMembersCount(operation) {
  switch (operation) {
    case 'sin':
    case 'cos':
    case 'tan':
      return 1;
    default:
      return 2;
  }
}

export function parseValue(value) {
  return value.includes('.') ? parseFloat(value) : parseInt(value);
}
