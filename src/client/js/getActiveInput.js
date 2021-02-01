const getActiveInput = () => {
  const urlInput = document.querySelector("#news-url");
  const textInput = document.querySelector("#news-text");
  return !urlInput.hasAttribute("disabled") ? urlInput : textInput;
};

export default getActiveInput;
