import toggleDisabledInputs from "./toggleDisabledInput";

toggleDisabledInputs();

const inputsForm = document.querySelector(".inputs-section form");
inputsForm.addEventListener("submit", (event) => {
  event.preventDefault();
});
