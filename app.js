var math;
var preMath;
var result = null;
var innerResult = 0;
var priorResult = null;
var isClear = true;
var isPrior = false;
var isMath = false;
var isComma = false;
var isShowCal = false;
var showCal = []; // show calculate
var innerCal = "";
var elemResult = document.getElementById("result");
var elemClear = document.getElementById("clear");
var elemCal = document.getElementById("cal");
var elemShowCal = document.getElementById("showCal");

function Input(id) {
  if (isMath) Clear();
  elemClear.innerHTML = "C";
  let elemId = document.getElementById(id);
  if (elemResult.textContent == 0) {
    innerResult = isComma
      ? elemResult.textContent + elemId.textContent
      : elemId.textContent;
  } else innerResult = elemResult.textContent + elemId.textContent;
  elemResult.innerHTML = innerResult;
  elemCal.innerHTML =
    result == null
      ? "= " + innerResult
      : "= " + parseFloat(result) + parseFloat(innerResult);

  console.log(showCal);
  innerCal = "";
  for (let val in showCal) innerCal += showCal[val] + " ";
  elemShowCal.innerHTML = innerCal + " " + innerResult;
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
  preMath;
  result = null;
  innerResult = 0;
  priorResult = null;
  isClear = true;
  isPrior = false;
  isMath = false;
  isComma = false;
  isShowCal = false;
  showCal = [];
  elemResult.innerHTML = 0;
};

let Add = () => {
  isMath = true;
  if (result == null) result = elemResult.textContent;
  math = "add";
  showCal.push(elemResult.textContent, "+");
  console.log(showCal);
};
let Sub = () => {
  isMath = true;
  if (result == null) result = elemResult.textContent;
  showCal.push(elemResult.textContent, "-");
  math = "sub";
};
let Multi = () => {
  isMath = true;
  if (result == null) result = elemResult.textContent;
  showCal.push(elemResult.textContent, "*");
  math = "multi";
};
let Divide = () => {
  isMath = true;
  if (result == null) result = elemResult.textContent;
  showCal.push(elemResult.textContent, ":");
  math = "divide";
};

let Calculate = () => {
  let a, b;
  a = parseFloat(result);
  b = parseFloat(innerResult);
  switch (math) {
    case "add":
      result = sum(a, b);
      isPrior = false;
      showCal.push("+", b);
      break;
    case "sub":
      result = sub(a, b);
      isPrior = false;
      showCal.push("-", b);
      break;
    case "multi":
      result = mul(a, b);
      isPrior = true;
      showCal.push("*", b);
      break;
    case "divide":
      result = div(a, b);
      isPrior = true;
      showCal.push(":", b);
      break;
  }
};

let ShowResult = () => {
  Calculate();
  elemResult.innerHTML = parseFloat(result.toFixed(10));
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
