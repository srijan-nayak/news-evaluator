import toggleDisabledInputs from "./toggleDisabledInput";
import getActiveInput from "./getActiveInput";
import hasValidValue from "./hasValidValue";

toggleDisabledInputs();

const inputsForm = document.querySelector(".inputs-section form");
inputsForm.addEventListener("submit", (event) => {
  const activeInput = getActiveInput();
  if (hasValidValue(activeInput)) {
    console.log("input is valid");
  } else {
    console.log("input is invalid");
  }
  event.preventDefault();
});
