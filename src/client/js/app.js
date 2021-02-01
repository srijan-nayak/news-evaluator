import toggleDisabledInputs from "./toggleDisabledInput";
import getActiveInput from "./getActiveInput";
import hasValidValue from "./hasValidValue";
import fetchData from "./fetchData";
import updateOutputCard from "./updateOutputCard";
import handleError from "./handleError";

toggleDisabledInputs();

const inputsForm = document.querySelector(".inputs-section form");

inputsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const activeInput = getActiveInput();
  if (hasValidValue(activeInput)) {
    const outputCard = document.querySelector(".card");
    outputCard.classList.add("loading");
    fetchData(activeInput)
      .then(({ ok, data }) => (ok ? updateOutputCard(data) : handleError(data)))
      .catch((err) => alert("Couldn't connect to the server!"))
      .finally(() => outputCard.classList.remove("loading"));
  }
});
