import toggleDisabledInputs from "./toggleDisabledInput";
import getActiveInput from "./getActiveInput";
import hasValidValue from "./hasValidValue";
import fetchData from "./fetchData";

toggleDisabledInputs();

const inputsForm = document.querySelector(".inputs-section form");

inputsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const activeInput = getActiveInput();
  if (hasValidValue(activeInput)) {
    const outputCard = document.querySelector(".card");
    outputCard.classList.add("loading");
    fetchData(activeInput).then((data) => {
      outputCard.classList.remove("loading");
      console.log(data);
    });
  }
});
