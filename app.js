var math;
var preMath;
var result;
var preResult;
var innerResult = 0;
var rtResult; // real-time Result
var priorResult;
var prePrior; // pre prior result
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
  Update();
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
let Update = () => {
  if (showCal.length == 0) rtResult = innerResult;
  else rtResult = Calculate(parseFloat(result), math, parseFloat(innerResult));
  console.log(preResult + " " + math + " " + rtResult);

  elemCal.innerHTML = rtResult;
  console.log("real time Result: " + rtResult);
};
let RecognizeCal = (id) => {
  if (rtResult == null) return;
  if (!isPrior) {
    priorResult = innerResult;
  }

  math = id;
  if (!isMath) {
    showCal.push(elemResult.innerHTML);
    if (id == "mul" || id == "div") {
      preResult = preResult ?? result;
      if (priorResult == innerResult) rtResult = priorResult;
      isPrior = true;
    } else if (id == "add" || id == "sub") {
      rtResult =
        preResult == null
          ? rtResult
          : Calculate(parseFloat(preResult), preMath, parseFloat(rtResult));
      console.log(preResult + " " + preMath + " " + rtResult);
      isPrior = false;
      preResult = null;
      preMath = id;
    }
  }

  if (isPrior && priorResult != innerResult)
    priorResult = Calculate(
      parseFloat(priorResult),
      math,
      parseFloat(innerResult)
    );

  console.log("priorResult: " + priorResult);
  console.log("result: " + result);

  ShowResult();
  isMath = true;
};

let Calculate = (a, id, b) => {
  //   math = id;
  var temp;
  switch (id) {
    case "add":
      temp = sum(a, b);
      break;
    case "sub":
      temp = sub(a, b);
      break;
    case "mul":
      temp = mul(a, b);
      break;
    case "div":
      temp = div(a, b);
      break;
    default:
      temp = b;
      break;
  }
  return parseFloat(temp.toFixed(10));
};
let Equal = () => {
  if (!math) {
    rtResult =
      preResult == null
        ? rtResult
        : Calculate(parseFloat(preResult), preMath, parseFloat(rtResult));
    console.log(preResult + " " + preMath + " " + rtResult);
    isPrior = false;
    preResult = null;
    preMath = null;
    ShowResult();
    elemCal.innerHTML = rtResult;
  }
  math = null;
};
let ShowResult = () => {
  result = parseFloat(rtResult ?? result);
  elemResult.innerHTML = parseFloat(result.toFixed(10));
};

let Negative = () => {
  elemResult.innerHTML = 0 - elemResult.textContent;
  innerResult = elemResult.textContent;

  Update();
};

let Percent = () => {
  elemResult.innerHTML = parseFloat(elemResult.textContent) / 100;
  innerResult = elemResult.textContent;
  Update();
};

let Comma = () => {
  isComma = true;
  return (elemResult.innerHTML = elemResult.textContent + ".");
};

let Clear = () => {
  isComma = false;
  if (isClear) {
    elemResult.innerHTML = 0;
    innerResult = 0;
    elemClear.innerHTML = "AC";
    isClear = false;
  } else AllClear();
};

let AllClear = () => {
  math;
  preMath;
  result;
  preResult;
  innerResult = 0;
  rtResult; // real-time Result
  priorResult;
  prePrior; // pre prior result
  isClear = true;
  isPrior = false;
  isMath = false;
  isComma = false;
  isShowCal = false;
  isEqual = false;
  showCal = []; // show calculate
  innerCal = "";
  elemResult.innerHTML = "0";

  elemCal.innerHTML = "0";
  elemShowCal.innerHTML = "0";
};

let sum = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;
