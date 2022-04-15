var result = 0;
var math = "";
var innerResult = 0;
var isClear = true;
var elemResult = document.getElementById("result");

var isMath = false;

function Input(id) {
  if (isMath) Clear();
  let elemId = document.getElementById(id);
  elemResult.textContent == 0
    ? (innerResult = elemId.textContent)
    : (innerResult = innerResult + elemId.textContent);
  elemResult.innerHTML = innerResult;
  isMath = false;
}

let Clear = () => {
  isClear ? (elemResult.innerHTML = 0) : AllClear();
};

let AllClear = () => {
  result = 0;
  elemResult.innerHTML = 0;
};

let Add = () => {
  isMath = true;
  Calculate();

  math = "add";
};
let Sub = () => {
  isMath = true;
  Calculate();
  math = "sub";
};
let Multi = () => {
  isMath = true;
  Calculate();
  math = "multi";
};
let Divide = () => {
  math = "divide";
};
let Negative = () => {
  elemResult.innerHTML = 0 - elemResult.textContent;
  innerResult = elemResult.textContent;
};

let Percent = () => {
  return (elemResult.innerHTML = elemResult.textContent / 100);
};

let Comma = () => {
  checkComma = true;
  return (elemResult.innerHTML = elemResult.textContent + ".");
};

let Calculate = () => {
  let a = parseFloat(result);
  let b = parseFloat(innerResult);
  console.log(a, b);
  switch (math) {
    case "add":
      result = a + b;
      break;
    case "sub":
      result = a - b;
      break;
    case "multi":
      result = a * b;
      break;
    case "divide":
      result = a / b;
      break;
  }

  elemResult.innerHTML = result;
};

let ShowResult = () => {
  Calculate();
  //   math = "";
};
