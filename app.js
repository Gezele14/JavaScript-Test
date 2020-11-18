const instructions = document.querySelector("#instr__container");
const info = document.querySelector("#info__container");
const quantityInput = document.querySelector("#quantity");
const goalInput = document.querySelector("#goal");
const progress = document.querySelector("#Progress");
const barProgress = document.querySelector("#Bar");

const updateBar = () => {
  let newGoal = goalInput.value;
  let newQuantity = quantityInput.value;
  let newWidth = (1 / (newGoal / newQuantity)) * 100;

  console.log(newWidth);

  if (newWidth > 100) {
    barProgress.style.width = `100%`;
  } else if (newWidth < 0) {
    barProgress.style.width = `0%`;
  } else if (!newWidth) {
    barProgress.style.width = `0%`;
  } else {
    barProgress.style.width = `${newWidth}%`;
    barProgress.innerHTML = `${Math.round(newWidth)}%`;
  }
};

quantityInput.addEventListener("change", updateBar);
goalInput.addEventListener("change", updateBar);

document.querySelector("#hsBar").addEventListener("click", () => {
  progress.toggleAttribute("hidden");
});

document.querySelector("#hsInstructions").addEventListener("click", () => {
  instructions.toggleAttribute("hidden");
});

document.querySelector("#hsDeveloper").addEventListener("click", () => {
  info.toggleAttribute("hidden");
});
