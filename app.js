var elemResult = document.getElementById("result");
// var checkComma = false;

function input(id) {
  let result = elemResult.textContent;
  let elemId = document.getElementById(id);

  result == 0
    ? (result = elemId.textContent)
    : (result = result + elemId.textContent);
  elemResult.innerHTML = result;
}

let restart = () => {
  reset();
};

let add = () => {
  localStorage.setItem("result", elemResult.textContent);
  localStorage.setItem("math", "add");
  reset();
};
let sub = () => {
  localStorage.setItem("result", elemResult.textContent);
  localStorage.setItem("math", "sub");
  reset();
};
let multi = () => {
  localStorage.setItem("result", elemResult.textContent);
  localStorage.setItem("math", "multi");
  reset();
};
let divide = () => {
  localStorage.setItem("result", elemResult.textContent);
  localStorage.setItem("math", "divide");
  reset();
};

let showResult = () => {
  let math = localStorage.getItem("math");
  let a = parseFloat(localStorage.getItem("result"));
  let b = parseFloat(elemResult.textContent);
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

  elemResult.innerHTML = result.toPrecision();
};

let saveResult = () => {
  return localStorage.getItem("result", result);
};

let negative = () => {
  return (elemResult.innerHTML = 0 - elemResult.textContent);
};

let percent = () => {
  return (elemResult.innerHTML = elemResult.textContent / 100);
};

let comma = () => {
  checkComma = true;
  return (elemResult.innerHTML = elemResult.textContent + ".");
};

let reset = () => {
  return (elemResult.innerHTML = 0);
};
