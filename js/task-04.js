function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function inputBox() {
  document.querySelector('[type="number"]').value;
}

function createBoxes(amount) {
  if (amount > 100) {
    amount = 100;
  }

  if (amount < 1) {
    amount = 1;
  }

  for (var i = 0; i < amount; i++) {
    const boxesDiv = document.getElementById("boxes");
    var boxSize = 30 + 10 * i;
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = boxSize + "px";
    newDiv.style.height = boxSize + "px";
    boxesDiv.appendChild(newDiv);
  }
}
function destroyBoxes() {
  const boxesDiv = document.getElementById("boxes");
  while (boxesDiv.lastElementChild) {
    boxesDiv.removeChild(boxesDiv.lastElementChild);
  }
}
const inputListener = document.querySelector('[type="number"]');
const createButton = document.querySelector("[data-create]");
const deleteButton = document.querySelector("[data-destroy]");
inputListener.addEventListener("input", () => {
  inputBox();
});
createButton.addEventListener("click", () => {
  createBoxes(inputListener.value);
});
deleteButton.addEventListener("click", () => {
  destroyBoxes();
});
