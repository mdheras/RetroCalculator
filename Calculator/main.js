let screen = "0";
let numberAdd;
let selectOperation;

let display = document.querySelector(".screen");

const operations = Object.freeze({
  sum: "sum",
  substract: "substract",
  multiply: "multiply",
  division: "division",
});

function clickBtn(number) {
  if (screen === "0") {
    screen = number;
  } else {
    screen += number;
  }
  update();
}

function calculator() {
  switch (selectOperation) {
    case operations.sum:
      screen = parseFloat(numberAdd) + parseFloat(screen);
      break;
    case operations.substract:
      screen = parseFloat(numberAdd) - parseFloat(screen);
      break;
    case operations.multiply:
      screen = parseFloat(numberAdd) * parseFloat(screen);
      break;
    case operations.division:
      screen = parseFloat(numberAdd) / parseFloat(screen);
      break;
    default:
      break;
  }
  update();
}

function setOp(operation) {
  numberAdd = screen;
  selectOperation = operation;
  clearScreen();
}

function clearScreen() {
  screen = "0";
  update("0");
}

function clearOp() {
  screen = "0";
  numberAdd = "0";
  selectOperation = "";
  update("0");
}

function update(value) {
  if (!value) {
    display.innerHTML = `${screen}`;
  } else {
    display.innerHTML = `${value}`;
  }
}
let numbers = document.getElementsByClassName("btn");
const buttons = [...numbers];

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    clickBtn(btn.value);
  });
});

document.getElementById("sum").addEventListener("click", function () {
  setOp(operations.sum);
});
document.getElementById("subs").addEventListener("click", function () {
  setOp(operations.substract);
});
document.getElementById("divide").addEventListener("click", function () {
  setOp(operations.division);
});
document.getElementById("multiply").addEventListener("click", function () {
  setOp(operations.multiply);
});

document.getElementById("equals").addEventListener("click", calculator);
document.getElementById("clear").addEventListener("click", clearScreen);
document.getElementById("clear-all").addEventListener("click", clearOp);

update();
