var math;
var result;
var innerResult = 0;
var rtResult; // real-time Result
var priorResult = null;
var isClear = true;
var isPrior = false;
var isMath = false;
var isComma = false;
var isShowCal = false;
var isEqual = false;
var showCal = []; // show calculate
var innerCal = "";
var elemResult = document.getElementById("result");
var elemClear = document.getElementById("clear");
var elemCal = document.getElementById("cal");
var elemShowCal = document.getElementById("showCal");

function Input(id) {
  if (isMath) {
    showCal.push(math);
    Clear();

    isMath = false;
  }

  elemClear.innerHTML = "C";
  let elemId = document.getElementById(id);
  if (elemResult.textContent == 0) {
    innerResult = isComma
      ? elemResult.textContent + elemId.textContent
      : elemId.textContent;
  } else innerResult = elemResult.textContent + elemId.textContent;
  elemResult.innerHTML = innerResult;

  if (showCal.length == 0) rtResult = innerResult;
  else rtResult = Calculate(parseFloat(result), math, parseFloat(innerResult));

  elemCal.innerHTML = rtResult;
  console.log("real time Result: " + rtResult);

  console.log(showCal);
  innerCal = "";
  for (let val in showCal) {
    switch (showCal[val]) {
      case "add":
        showCal[val] = "+";
        break;
      case "sub":
        showCal[val] = "-";
        break;
      case "mul":
        showCal[val] = "*";
        break;
      case "div":
        showCal[val] = ":";
        break;
    }
    innerCal += showCal[val] + " ";
  }
  elemShowCal.innerHTML = innerCal + " " + innerResult;
  isClear = true;
}

let RecognizeCal = (id) => {
  math = id;
  showCal.push(elemResult.innerHTML);
  ShowResult();
  isMath = true;
};

let Calculate = (a, id, b) => {
  math = id;
  switch (id) {
    case "add":
      isPrior = false;
      rtResult = sum(a, b);
      break;
    case "sub":
      isPrior = false;
      rtResult = sub(a, b);
      break;
    case "mul":
      rtResult = mul(a, b);
      isPrior = true;
      break;
    case "div":
      rtResult = div(a, b);
      isPrior = true;
      break;
  }

  return parseFloat(rtResult.toFixed(10));
};

let ShowResult = () => {
  result = parseFloat(rtResult ?? result);

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

let Clear = () => {
  isComma = false;
  if (isClear) {
    elemResult.innerHTML = 0;
    elemClear.innerHTML = "AC";
    isClear = false;
  } else AllClear();
};

let AllClear = () => {
  math;
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
  elemCal.innerHTML = 0;
  elemShowCal.innerHTML = 0;
};

let sum = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;
