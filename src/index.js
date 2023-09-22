module.exports = function check(str, bracketsConfig) {
  let stack = [];
  const openBrackets = bracketsConfig.map((config) => config[0]);
  const closeBrackets = bracketsConfig.map((config) => config[1]);
  for (let i = 0; i < str.length; i++) {
    let carrentSymbol = str[i];
    let topElement = stack[stack.length - 1];
    if (
      openBrackets.includes(carrentSymbol) &&
      closeBrackets.includes(carrentSymbol) &&
      carrentSymbol === topElement
    ) {
      stack.pop();
    } else if (openBrackets.includes(carrentSymbol)) {
      stack.push(carrentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      } else {
        if (openBrackets[closeBrackets.indexOf(carrentSymbol)] === topElement) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  return stack.length === 0;
};
