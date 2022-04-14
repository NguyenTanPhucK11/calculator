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

let remove = () => {
  reset();
  localStorage.setItem("result", result);
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
