const runCalculator = (x, y, operator) => {
  switch (operator) {
    case '+': return x + y;
    case '-': return x - y;
    case '×': return x * y;
    case '÷': return x / y;
    case '%': return x % y;
    default: alert("Error");
  }
}

export default runCalculator;

