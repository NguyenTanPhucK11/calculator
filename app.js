var math;
var result = null;
var innerResult = 0;
var priorResult = null;
var isClear = true;
var isPrior = false;
var isMath = false;
var isComma = false;
var elemResult = document.getElementById("result");
var elemClear = document.getElementById("clear");

function Input(id) {
  if (isMath) Clear();
  elemClear.innerHTML = "C";
  let elemId = document.getElementById(id);
  console.log(isComma);
  if (elemResult.textContent == 0) {
    innerResult = isComma
      ? elemResult.textContent + elemId.textContent
      : elemId.textContent;
  } else innerResult = elemResult.textContent + elemId.textContent;
  elemResult.innerHTML = innerResult;
  isClear = true;
  isMath = false;
}

let Clear = () => {
  isComma = false;

  if (isClear) {
    elemResult.innerHTML = 0;
    elemClear.innerHTML = "AC";
    isClear = false;
  } else {
    AllClear();
  }
};

let AllClear = () => {
  math;
  result = null;
  innerResult = 0;
  priorResult = null;
  isClear = true;
  isPrior = false;
  isMath = false;
  elemResult.innerHTML = 0;
};

let Add = () => {
  isMath = true;
  if (result == null) result = elemResult.textContent;
  math = "add";
};
let Sub = () => {
  isMath = true;
  if (result == null) result = elemResult.textContent;
  math = "sub";
};
let Multi = () => {
  isMath = true;
  if (result == null) result = elemResult.textContent;
  console.log(result);
  math = "multi";
};
let Divide = () => {
  isMath = true;
  if (result == null) result = elemResult.textContent;
  math = "divide";
};

let Calculate = () => {
  let a, b;
  a = parseFloat(result);
  b = parseFloat(innerResult);
  console.log(a, b);
  switch (math) {
    case "add":
      result = sum(a, b);
      console.log(result);
      isPrior = false;
      break;
    case "sub":
      result = sub(a, b);
      isPrior = false;
      break;
    case "multi":
      result = mul(a, b);
      isPrior = true;
      break;
    case "divide":
      result = div(a, b);
      isPrior = true;
      break;
  }

  elemResult.innerHTML = parseFloat(result.toFixed(10));
};

let ShowResult = () => {
  Calculate();
};

let Negative = () => {
  elemResult.innerHTML = 0 - elemResult.textContent;
  innerResult = elemResult.textContent;
};

let Percent = () => {
  elemResult.innerHTML = elemResult.textContent / 100;
  result = elemResult.textContent;
};

let Comma = () => {
  isComma = true;

  return (elemResult.innerHTML = elemResult.textContent + ".");
};

let sum = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;
