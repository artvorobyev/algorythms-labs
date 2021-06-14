export function getOperationPriority(operation) {
  switch (operation) {
    case 'sin':
    case 'cos':
    case 'tan':
      return 3;
    case '/':
    case '*':
      return 2;
    default:
      return 1;
  }
}
