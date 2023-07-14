//  Based on Murach's JavaSript and JQuery, 4th Ed. Page 595

// ADD A PRIVATE FUNCTION CALLED CALCULATE
function calculate(num1, num2, op) {
  switch(p) {
    case "+":
      return(num1 + num2);
      break;
    case "-":
      return(num1 - num2);
      break;
    case "*":
      return(num1 * num2);
      break;
    case "/":
      return(num1 / num2);
      break;
  }
}


// ADD FOUR PUBLIC FUNCTIONS BELOW

//  ADD FUNCTION
export function add(num1,num2) {
  return(calculate(num1, num2, "+"));
}

//  SUBTRACT FUNCTION
export function subtract(num1,num2) {
  return(calculate(num1, num2, "-"));
}

//  MULTIPLY FUNCTION
export function multiply(num1,num2) {
  return(calculate(num1, num2, "*"));
}

//  DIVIDE FUNCTION
export function divide(num1,num2) {
  return(calculate(num1, num2, "/"));
}

//  EXPORT THE FOUR PUBLIC FUNCTIONS


//  vim: ft=javascript ai ts=2 et
