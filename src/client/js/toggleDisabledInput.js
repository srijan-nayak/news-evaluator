const toggleDisabledInputs = () => {
  const urlInput = document.querySelector("#news-url");
  const textInput = document.querySelector("#news-text");

  const urlInputGroup = document.querySelector("#url-input-group");
  const textInputGroup = document.querySelector("#text-input-group");

  urlInputGroup.addEventListener("click", () => {
    textInput.setAttribute("disabled", "true");
    urlInput.removeAttribute("disabled");
    urlInput.focus();
  });
  textInputGroup.addEventListener("click", () => {
    urlInput.setAttribute("disabled", "true");
    textInput.removeAttribute("disabled");
    textInput.focus();
  });
};

export default toggleDisabledInputs;
